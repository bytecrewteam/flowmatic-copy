'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { PublicNav } from '@/components/layout/PublicNav';
import { Footer } from '@/components/layout/Footer';
import { pricingPlans } from '@/lib/mock-data';
import { FAQAccordion } from '@/components/sections/FAQAccordion';

// Extended FAQ with billing-specific questions
const billingFaqItems = [
  {
    question: 'Can I change plans at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards (Visa, Mastercard, Amex) and PayPal.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Yes. If you\'re not satisfied within the first 14 days, contact us for a full refund. No questions asked.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'Your data is retained for 30 days after cancellation. You can export everything before that window closes.',
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-[#07070f]">
      <PublicNav />
      
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-[#e8e8f4] mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-lg text-[#6b6b9a]">
              Choose the plan that fits your team. No hidden fees.
            </p>
          </div>

          {/* Billing Toggle - Custom Pill */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm font-medium ${!annual ? 'text-[#e8e8f4]' : 'text-[#6b6b9a]'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-16 h-8 rounded-full transition-colors bg-[#1e1e35] hover:bg-[#2a2a45]"
              role="switch"
              aria-checked={annual}
            >
              <span 
                className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform duration-200 ${annual ? 'left-9' : 'left-1'}`} 
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-2 ${annual ? 'text-[#e8e8f4]' : 'text-[#6b6b9a]'}`}>
              Annual
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: 'rgba(0, 212, 170, 0.15)', color: '#00d4aa' }}>
                Save 20%
              </span>
            </span>
          </div>

          {/* Pricing Cards - Pro Elevated */}
          {/* FIX: Added overflow:visible to grid wrapper so the scaled Pro card isn't clipped */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16" style={{ overflow: 'visible' }}>
            {pricingPlans.map((plan) => (
              <div 
                key={plan.tier}
                className={`relative p-6 bg-[#0f0f1c] border rounded-xl ${
                  plan.popular 
                    ? 'border-[#6c47ff] shadow-[0_0_48px_rgba(108,71,255,0.3)]' 
                    // FIX: Removed opacity-90 — it made Free and Enterprise look disabled
                    : 'border-[#1e1e35]'
                }`}
                // FIX: Added z-index:10 so scaled card renders above siblings without clipping
                style={plan.popular ? { transform: 'scale(1.05)', overflow: 'visible', position: 'relative', zIndex: 10 } : {}}
              >
                {plan.popular && (
                  <div 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white whitespace-nowrap z-10"
                    style={{ background: '#6c47ff' }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-semibold text-[#e8e8f4] mb-2">{plan.name}</h3>
                <div className="mb-4">
                  {plan.price === 0 && plan.tier !== 'enterprise' ? (
                    <span className="text-3xl font-bold text-[#e8e8f4]">Free</span>
                  ) : plan.tier === 'enterprise' ? (
                    <span className="text-3xl font-bold text-[#e8e8f4]">Custom</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-[#e8e8f4]">
                        ${annual && plan.annualPrice ? plan.annualPrice : plan.price}
                      </span>
                      <span className="text-[#6b6b9a]">/mo</span>
                    </>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#6b6b9a]">
                      <Check className="w-4 h-4 text-[#00c48c] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.popular ? 'primary' : plan.tier === 'enterprise' ? 'secondary' : 'primary'} 
                  className="w-full"
                  style={plan.tier === 'enterprise' ? { border: '1px solid white', background: 'transparent' } : {}}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* Feature Comparison */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#e8e8f4] text-center mb-8">Compare plans</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1e1e35]">
                    <th className="text-left py-3 px-4 text-[#e8e8f4]">Feature</th>
                    {pricingPlans.map((plan) => (
                      <th key={plan.tier} className="text-center py-3 px-4 text-[#e8e8f4]">{plan.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Active workflows', values: ['5', 'Unlimited', 'Unlimited'] },
                    { name: 'Tasks per month', values: ['1,000', '50,000', 'Unlimited'] },
                    { name: 'Integrations', values: ['3', '2,000+', 'Unlimited'] },
                    { name: 'Team seats', values: ['1', '10', 'Unlimited'] },
                    { name: 'Priority support', values: [false, true, true] },
                    { name: 'AI suggestions', values: [false, true, true] },
                    { name: 'Advanced analytics', values: [false, true, true] },
                    { name: 'SSO & SAML', values: [false, false, true] },
                    { name: 'Dedicated CSM', values: [false, false, true] },
                  ].map((row) => (
                    <tr key={row.name} className="border-b border-[#1e1e35]">
                      <td className="py-3 px-4 text-[#6b6b9a]">{row.name}</td>
                      {row.values.map((value, i) => (
                        <td key={i} className="text-center py-3 px-4">
                          {typeof value === 'boolean' ? (
                            value ? <Check className="w-5 h-5 text-[#00c48c] mx-auto" /> : <span className="text-[#6b6b9a]">—</span>
                          ) : (
                            <span className="text-[#e8e8f4]">{value}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#e8e8f4] text-center mb-8">Frequently asked questions</h2>
            <FAQAccordion items={billingFaqItems} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
