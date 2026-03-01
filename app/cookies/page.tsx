'use client';

import { PublicNav } from '@/components/layout/PublicNav';
import { Footer } from '@/components/layout/Footer';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#07070f]">
      <PublicNav />
      <main id="main-content" className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-[#e8e8f4] mb-8">Cookie Policy</h1>
          <div className="prose prose-invert text-[#6b6b9a]">
            <p className="mb-4">Last updated: January 1, 2026</p>
            <p className="mb-4">This Cookie Policy explains how Flowmatic uses cookies and similar technologies.</p>
            <h2 className="text-xl font-semibold text-[#e8e8f4] mt-8 mb-4">What Are Cookies</h2>
            <p className="mb-4">Cookies are small text files stored on your device when you visit websites.</p>
            <h2 className="text-xl font-semibold text-[#e8e8f4] mt-8 mb-4">How We Use Cookies</h2>
            <p className="mb-4">We use cookies to understand how you use our service and to improve your experience.</p>
            <h2 className="text-xl font-semibold text-[#e8e8f4] mt-8 mb-4">Managing Cookies</h2>
            <p className="mb-4">You can control or delete cookies through your browser settings.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
