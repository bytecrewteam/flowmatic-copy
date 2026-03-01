'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Zap, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#07070f] flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="w-16 h-16 rounded-full bg-[#00c48c]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-[#00c48c]" />
          </div>
          <h1 className="text-2xl font-bold text-[#e8e8f4] mb-2">Check your inbox</h1>
          <p className="text-[#6b6b9a] mb-6">
            We've sent a password reset link to <span className="text-[#e8e8f4]">{email}</span>
          </p>
          <Link href="/login">
            <Button variant="secondary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to login
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07070f] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#6c47ff] flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-[#e8e8f4]">Flowmatic</span>
        </Link>

        <div className="bg-[#0f0f1c] border border-[#1e1e35] rounded-xl p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-[#e8e8f4] mb-2">Forgot password?</h1>
            <p className="text-[#6b6b9a]">No worries, we'll send you reset instructions.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={setEmail}
              icon={<Mail className="w-4 h-4" />}
              required
            />

            <Button type="submit" className="w-full" loading={loading}>
              Reset password
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/login" className="inline-flex items-center gap-2 text-sm text-[#6b6b9a] hover:text-[#e8e8f4] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
