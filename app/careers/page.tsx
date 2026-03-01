'use client';

import { PublicNav } from '@/components/layout/PublicNav';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { MapPin, Building2 } from 'lucide-react';

const jobs = [
  { title: 'Senior Frontend Engineer', department: 'Engineering', location: 'San Francisco, CA', type: 'Hybrid' },
  { title: 'Backend Engineer', department: 'Engineering', location: 'Remote', type: 'Remote' },
  { title: 'Product Designer', department: 'Design', location: 'Remote', type: 'Remote' },
  { title: 'Developer Advocate', department: 'Marketing', location: 'New York, NY', type: 'Hybrid' },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#07070f]">
      <PublicNav />
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#e8e8f4] mb-4">Join the team</h1>
          <p className="text-lg text-[#6b6b9a] mb-12">Help us build the future of workflow automation.</p>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.title} className="p-6 bg-[#161626] rounded-xl flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#e8e8f4] mb-1">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-[#6b6b9a]">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                  </div>
                </div>
                <Button variant="secondary" size="sm">Apply</Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
