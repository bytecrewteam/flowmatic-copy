'use client';

import { PublicNav } from '@/components/layout/PublicNav';
import { Footer } from '@/components/layout/Footer';
import { Check, AlertTriangle, XCircle, Clock } from 'lucide-react';

const statusComponents = [
  { name: 'API', status: 'operational', uptime: '99.99%' },
  { name: 'Dashboard', status: 'operational', uptime: '99.98%' },
  { name: 'Workflow Engine', status: 'operational', uptime: '99.95%' },
  { name: 'Webhooks', status: 'operational', uptime: '99.97%' },
  { name: 'Integrations', status: 'degraded', uptime: '99.50%' },
];

const incidents = [
  {
    date: 'February 20, 2026',
    title: 'Degraded Performance on Integrations',
    status: 'resolved',
    description: 'Some third-party integrations experienced delays. Root cause identified and fixed.',
  },
  {
    date: 'February 15, 2026',
    title: 'Scheduled Maintenance',
    status: 'resolved',
    description: 'Routine database optimization completed successfully.',
  },
];

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[#07070f]">
      <PublicNav />
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-[#00c48c] animate-pulse" />
            <span className="text-2xl font-bold text-[#e8e8f4]">All Systems Operational</span>
          </div>

          {/* Components */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-[#e8e8f4] mb-4">System Status</h2>
            <div className="space-y-2">
              {statusComponents.map((comp) => (
                <div key={comp.name} className="flex items-center justify-between p-4 bg-[#161626] rounded-lg">
                  <div className="flex items-center gap-3">
                    {comp.status === 'operational' && <Check className="w-5 h-5 text-[#00c48c]" />}
                    {comp.status === 'degraded' && <AlertTriangle className="w-5 h-5 text-[#f5a623]" />}
                    {comp.status === 'down' && <XCircle className="w-5 h-5 text-[#f04438]" />}
                    <span className="text-[#e8e8f4]">{comp.name}</span>
                  </div>
                  <span className="text-[#6b6b9a]">{comp.uptime}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Incidents */}
          <div>
            <h2 className="text-xl font-semibold text-[#e8e8f4] mb-4">Recent Incidents</h2>
            <div className="space-y-4">
              {incidents.map((incident) => (
                <div key={incident.date} className="p-4 bg-[#161626] rounded-lg border-l-4 border-[#00c48c]">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#6b6b9a]" />
                    <span className="text-sm text-[#6b6b9a]">{incident.date}</span>
                  </div>
                  <h3 className="font-semibold text-[#e8e8f4] mb-1">{incident.title}</h3>
                  <p className="text-sm text-[#6b6b9a]">{incident.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
