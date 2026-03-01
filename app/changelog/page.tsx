'use client';

import { PublicNav } from '@/components/layout/PublicNav';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';

const changelogEntries = [
  {
    version: 'v3.2.1',
    date: 'February 18, 2026',
    badge: 'Bug Fix',
    badgeColor: 'bg-[#00d4aa]',
    changes: [
      'Fixed: Automation runs sometimes failing silently on webhook triggers',
      'Fixed: Dashboard chart not updating in real time after workflow completion',
      'Improved: Faster load time on the analytics page (~40% improvement)',
    ],
  },
  {
    version: 'v3.2.0',
    date: 'February 3, 2026',
    badge: 'Feature',
    badgeColor: 'bg-[#6c47ff]',
    changes: [
      'New: AI Suggestions now detects patterns across your entire workspace, not just individual projects',
      'New: Bulk enable/disable automations from the project detail page',
      'New: Slack notification integration (beta)',
      'Improved: Redesigned onboarding flow — most teams complete setup in under 10 minutes now',
    ],
  },
  {
    version: 'v3.1.0',
    date: 'January 15, 2026',
    badge: 'Feature',
    badgeColor: 'bg-[#6c47ff]',
    changes: [
      'New: Advanced analytics dashboard with custom date ranges',
      'New: Team activity feed on the dashboard',
      'New: Export automation run logs as CSV',
      'Fixed: Occasional 500 errors on the billing settings page',
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-[#07070f]">
      <PublicNav />
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#e8e8f4] mb-4">What's new in Flowmatic</h1>
          <p className="text-lg text-[#6b6b9a] mb-12">Every update, improvement, and fix — documented.</p>

          <div className="space-y-8">
            {changelogEntries.map((entry) => (
              <div key={entry.version} className="border-l-4 border-[#6c47ff] pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-[#e8e8f4]">{entry.version}</span>
                  <span className="text-[#6b6b9a]">{entry.date}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium text-white ${entry.badgeColor}`}>
                    {entry.badge}
                  </span>
                </div>
                <ul className="space-y-2">
                  {entry.changes.map((change) => (
                    <li key={change} className="text-[#6b6b9a]">• {change}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
