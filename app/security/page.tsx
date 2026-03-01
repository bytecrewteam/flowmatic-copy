'use client';

import { PublicNav } from '@/components/layout/PublicNav';
import { Footer } from '@/components/layout/Footer';
import { Shield, Lock, Server, Eye } from 'lucide-react';

const features = [
  { icon: Shield, title: 'SOC 2 Type II', description: 'We maintain annual SOC 2 Type II certification.' },
  { icon: Lock, title: 'Encryption', description: 'All data encrypted at rest and in transit with AES-256.' },
  { icon: Server, title: 'Infrastructure', description: 'Hosted on AWS with enterprise-grade security.' },
  { icon: Eye, title: 'Monitoring', description: '24/7 monitoring and incident response team.' },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#07070f]">
      <PublicNav />
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#e8e8f4] mb-4">Security at Flowmatic</h1>
          <p className="text-lg text-[#6b6b9a] mb-12">Your data security is our top priority.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 bg-[#161626] rounded-xl">
                <feature.icon className="w-8 h-8 text-[#6c47ff] mb-4" />
                <h3 className="text-lg font-semibold text-[#e8e8f4] mb-2">{feature.title}</h3>
                <p className="text-[#6b6b9a]">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-invert">
            <h2 className="text-2xl font-bold text-[#e8e8f4] mb-4">Security Practices</h2>
            <p className="text-[#6b6b9a] mb-4">
              We employ industry-standard security practices including regular security audits, 
              employee training, and incident response procedures.
            </p>
            <h2 className="text-2xl font-bold text-[#e8e8f4] mb-4 mt-8">Report Vulnerabilities</h2>
            <p className="text-[#6b6b9a] mb-4">
              If you discover a security vulnerability, please contact us at security@flowmatic.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
