'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, Check, Download, AlertCircle, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { billingInfo, paymentMethod, invoices, formatDate, formatCurrency } from '@/lib/mock-data';
import { toast } from '@/lib/store/useToastStore';

export default function BillingSettingsPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdatePlan = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    toast.success('Plan updated successfully');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Current Plan */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-[#e8e8f4]">Current Plan</h3>
              <p className="text-sm text-[#6b6b9a]">Manage your subscription</p>
            </div>
            <Badge variant="success" className="self-start">
              <Sparkles className="w-3 h-3 mr-1" />
              Pro Plan
            </Badge>
          </div>

          <div className="bg-[#0f0f1c] border border-[#1e1e35] rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold text-[#e8e8f4]">
                {formatCurrency(billingInfo.amount)}
                <span className="text-sm font-normal text-[#6b6b9a]">/month</span>
              </span>
              <Badge variant="neutral">{billingInfo.billingCycle === 'monthly' ? 'Monthly' : 'Annual'}</Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6b6b9a]">
              <Calendar className="w-4 h-4" />
              <span>Next billing date: {formatDate(billingInfo.nextBillingDate)}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" onClick={() => toast.info('Change plan coming soon')}>
              Change Plan
            </Button>
            <Button variant="ghost" onClick={() => toast.info('Cancel subscription coming soon')}>
              Cancel Subscription
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-[#e8e8f4] mb-6">Payment Method</h3>
          
          <div className="flex items-center justify-between p-4 bg-[#0f0f1c] border border-[#1e1e35] rounded-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-[#1e1e35] rounded flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-[#6b6b9a]" />
              </div>
              <div>
                <p className="font-medium text-[#e8e8f4]">
                  •••• •••• •••• {paymentMethod.last4}
                </p>
                <p className="text-sm text-[#6b6b9a]">
                  Expires {paymentMethod.expiryMonth}/{paymentMethod.expiryYear}
                </p>
              </div>
            </div>
            <Button variant="ghost" onClick={() => toast.info('Update payment method coming soon')}>
              Update
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Usage */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-[#e8e8f4] mb-6">Current Usage</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#6b6b9a]">Tasks</span>
                <span className="text-sm text-[#e8e8f4]">41,000 / 50,000</span>
              </div>
              <div className="h-2 bg-[#1e1e35] rounded-full overflow-hidden">
                <div className="h-full bg-[#6c47ff] rounded-full" style={{ width: '82%' }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#6b6b9a]">Workflows</span>
                <span className="text-sm text-[#e8e8f4]">38 / Unlimited</span>
              </div>
              <div className="h-2 bg-[#1e1e35] rounded-full overflow-hidden">
                <div className="h-full bg-[#00c48c] rounded-full" style={{ width: '38%' }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#6b6b9a]">Team Members</span>
                <span className="text-sm text-[#e8e8f4]">4 / 10</span>
              </div>
              <div className="h-2 bg-[#1e1e35] rounded-full overflow-hidden">
                <div className="h-full bg-[#ffab00] rounded-full" style={{ width: '40%' }} />
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#ffab00]/10 border border-[#ffab00]/20 rounded-xl flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#ffab00] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-[#e8e8f4]">Approaching your task limit</p>
              <p className="text-sm text-[#6b6b9a]">You've used 82% of your monthly tasks. Consider upgrading to get more.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-[#e8e8f4] mb-6">Billing History</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#1e1e35]">
                  <th className="text-left pb-4 text-sm font-medium text-[#6b6b9a]">Date</th>
                  <th className="text-left pb-4 text-sm font-medium text-[#6b6b9a]">Amount</th>
                  <th className="text-left pb-4 text-sm font-medium text-[#6b6b9a]">Status</th>
                  <th className="text-right pb-4 text-sm font-medium text-[#6b6b9a]">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-[#1e1e35]">
                    <td className="py-4 text-sm text-[#e8e8f4]">{formatDate(invoice.date)}</td>
                    <td className="py-4 text-sm text-[#e8e8f4]">{formatCurrency(invoice.amount)}</td>
                    <td className="py-4">
                      <Badge variant="success">{invoice.status}</Badge>
                    </td>
                    <td className="py-4 text-right">
                      <Button variant="ghost" size="sm" onClick={() => toast.info('Download invoice coming soon')}>
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
