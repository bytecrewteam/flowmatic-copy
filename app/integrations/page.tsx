'use client';

import { PublicNav } from '@/components/layout/PublicNav';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Search, Check, Zap } from 'lucide-react';

const integrations = [
  { name: 'Slack', category: 'Communication', status: 'connected', icon: '💬' },
  { name: 'Notion', category: 'Productivity', status: 'connected', icon: '📝' },
  { name: 'GitHub', category: 'Developer Tools', status: 'available', icon: '🐙' },
  { name: 'HubSpot', category: 'CRM', status: 'available', icon: '🧡' },
  { name: 'Airtable', category: 'Database', status: 'available', icon: '📊' },
  { name: 'Salesforce', category: 'CRM', status: 'available', icon: '☁️' },
  { name: 'Google Sheets', category: 'Spreadsheets', status: 'available', icon: '📑' },
  { name: 'Zendesk', category: 'Support', status: 'available', icon: '🎧' },
  { name: 'Shopify', category: 'E-commerce', status: 'available', icon: '🛒' },
  { name: 'Stripe', category: 'Payments', status: 'available', icon: '💳' },
  { name: 'Jira', category: 'Project Management', status: 'available', icon: '📋' },
  { name: 'Discord', category: 'Communication', status: 'available', icon: '🎮' },
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-[#07070f]">
      <PublicNav />
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-[#e8e8f4] mb-4">2,000+ integrations and growing</h1>
            <p className="text-lg text-[#6b6b9a]">Connect Flowmatic with the tools your team already uses.</p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b6b9a]" />
              <input
                type="text"
                placeholder="Search integrations..."
                className="w-full bg-[#161626] border border-[#1e1e35] rounded-lg py-3 pl-12 pr-4 text-[#e8e8f4] placeholder:text-[#6b6b9a] focus:outline-none focus:border-[#6c47ff]"
              />
            </div>
          </div>

          {/* Connected */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-[#e8e8f4] mb-4">Connected</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {integrations.filter(i => i.status === 'connected').map((integration) => (
                <Card key={integration.name} className="p-4 bg-[#161626] border-[#6c47ff]/30">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{integration.icon}</span>
                    <div>
                      <p className="font-semibold text-[#e8e8f4]">{integration.name}</p>
                      <p className="text-xs text-[#00d4aa] flex items-center gap-1">
                        <Check className="w-3 h-3" /> Connected
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Available */}
          <div>
            <h2 className="text-xl font-semibold text-[#e8e8f4] mb-4">Available</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {integrations.filter(i => i.status === 'available').map((integration) => (
                <Card key={integration.name} hover className="p-4 cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{integration.icon}</span>
                      <div>
                        <p className="font-semibold text-[#e8e8f4]">{integration.name}</p>
                        <p className="text-xs text-[#6b6b9a]">{integration.category}</p>
                      </div>
                    </div>
                    <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      Connect
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
