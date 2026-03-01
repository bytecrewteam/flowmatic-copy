'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Zap, Mail, Lock, Github } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuthStore } from '@/lib/store/useAuthStore';
import { toast } from '@/lib/store/useToastStore';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/app/dashboard';
  const { login } = useAuthStore();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      toast.success('Welcome back!');
      router.push(redirect);
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    toast.info(`${provider} login coming soon`);
  };

  return (
    <div className="w-full max-w-md">
      <Link href="/" className="flex items-center justify-center gap-2 mb-8">
        <div className="w-10 h-10 rounded-xl bg-[#6c47ff] flex items-center justify-center">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold text-[#e8e8f4]">Flowmatic</span>
      </Link>

      <div className="bg-[#0f0f1c] border border-[#1e1e35] rounded-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-[#e8e8f4] mb-2">Welcome back</h1>
          <p className="text-[#6b6b9a]">Sign in to your account</p>
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

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={setPassword}
            icon={<Lock className="w-4 h-4" />}
            required
          />

          {error && (
            <p className="text-sm text-[#f04438]">{error}</p>
          )}

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-[#6b6b9a]">
              <input type="checkbox" className="rounded border-[#1e1e35]" />
              Remember me
            </label>
            <Link href="/forgot-password" className="text-sm text-[#6c47ff] hover:text-[#00d4aa]">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full" loading={loading}>
            Sign in
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#1e1e35]" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-[#0f0f1c] px-2 text-[#6b6b9a]">or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="secondary" onClick={() => handleSocialLogin('Google')}>
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </Button>
          <Button variant="secondary" onClick={() => handleSocialLogin('GitHub')}>
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>

      <p className="text-center text-sm text-[#6b6b9a] mt-6">
        Don't have an account?{' '}
        <Link href="/signup" className="text-[#6c47ff] hover:text-[#00d4aa]">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#07070f] flex items-center justify-center p-4">
      <Suspense fallback={<div className="text-[#e8e8f4]">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
