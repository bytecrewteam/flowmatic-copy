'use client';

import { PublicNav } from '@/components/layout/PublicNav';
import { Footer } from '@/components/layout/Footer';
import { Zap, Users, Target } from 'lucide-react';

const values = [
  { icon: Zap, title: 'Move fast', description: 'We ship fast, learn faster, and always iterate on user feedback.' },
  { icon: Users, title: 'Put users first', description: 'Every decision we make starts with the question: does this help our users?' },
  { icon: Target, title: 'Stay focused', description: 'We do one thing really well — workflow automation — and we do it with focus.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#07070f]">
      <PublicNav />
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#e8e8f4] mb-4">About Flowmatic</h1>
          <p className="text-lg text-[#6b6b9a] mb-12">We're building the future of work automation.</p>

          <div className="prose prose-invert max-w-none">
            <p className="text-[#e8e8f4] mb-6">
              Flowmatic was born from a simple frustration: every team has repetitive tasks that eat up hours each week. 
              We believed there had to be a better way — no code required, no complexity barriers, just pure productivity.
            </p>
            <p className="text-[#e8e8f4] mb-12">
              Today, over 4,200 teams use Flowmatic to automate their workflows, saving an average of 14 hours per person 
              every week. And we're just getting started.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#e8e8f4] mb-6">Our values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 bg-[#161626] rounded-xl">
                <value.icon className="w-8 h-8 text-[#6c47ff] mb-4" />
                <h3 className="text-lg font-semibold text-[#e8e8f4] mb-2">{value.title}</h3>
                <p className="text-[#6b6b9a]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
