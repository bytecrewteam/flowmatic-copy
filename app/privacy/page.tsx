'use client';

import { PublicNav } from '@/components/layout/PublicNav';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#07070f]">
      <PublicNav />
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-[#e8e8f4] mb-8">Privacy Policy</h1>
          <div className="prose prose-invert text-[#6b6b9a]">
            <p className="mb-4">Last updated: January 1, 2026</p>
            <p className="mb-4">At Flowmatic, we take your privacy seriously. This policy explains how we collect, use, and protect your data.</p>
            <h2 className="text-xl font-semibold text-[#e8e8f4] mt-8 mb-4">Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us, such as when you create an account, use our services, or communicate with us.</p>
            <h2 className="text-xl font-semibold text-[#e8e8f4] mt-8 mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our rights and the rights of our users.</p>
            <h2 className="text-xl font-semibold text-[#e8e8f4] mt-8 mb-4">Data Security</h2>
            <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
            <h2 className="text-xl font-semibold text-[#e8e8f4] mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at privacy@flowmatic.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
