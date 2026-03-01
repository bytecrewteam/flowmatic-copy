'use client';

import { PublicNav } from '@/components/layout/PublicNav';
import { Footer } from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#07070f]">
      <PublicNav />
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-[#e8e8f4] mb-8">Terms of Service</h1>
          <div className="prose prose-invert text-[#6b6b9a]">
            <p className="mb-4">Last updated: January 1, 2026</p>
            <p className="mb-4">By using Flowmatic, you agree to these terms. Please read them carefully.</p>
            <h2 className="text-xl font-semibold text-[#e8e8f4] mt-8 mb-4">Use of Service</h2>
            <p className="mb-4">You may use our service only for lawful purposes and in accordance with these Terms.</p>
            <h2 className="text-xl font-semibold text-[#e8e8f4] mt-8 mb-4">Account Responsibilities</h2>
            <p className="mb-4">You are responsible for maintaining the confidentiality of your account and password.</p>
            <h2 className="text-xl font-semibold text-[#e8e8f4] mt-8 mb-4">Limitation of Liability</h2>
            <p className="mb-4">Flowmatic shall not be liable for any indirect, incidental, or consequential damages.</p>
            <h2 className="text-xl font-semibold text-[#e8e8f4] mt-8 mb-4">Contact</h2>
            <p className="mb-4">Questions about these Terms? Contact us at legal@flowmatic.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
