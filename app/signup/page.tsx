'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Zap, Mail, Lock, User, Github } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuthStore } from '@/lib/store/useAuthStore';
import { toast } from '@/lib/store/useToastStore';

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuthStore();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const getPasswordStrength = (pwd: string): 'weak' | 'medium' | 'strong' => {
    if (pwd.length < 6) return 'weak';
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLower = /[a-z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSpecial = /[!@#$%^&*]/.test(pwd);
    const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
    if (score >= 3 && pwd.length >= 8) return 'strong';
    return 'medium';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      await signup(name, email, password);
      toast.success('Account created successfully!');
      router.push('/app/dashboard');
    } catch (err) {
      setError('Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  const passwordStrength = getPasswordStrength(password);

  return (
    <div className="min-h-screen bg-[#07070f] flex items-center justify-center p-4 relative" style={{ background: 'radial-gradient(circle at 50% 40%, rgba(108, 71, 255, 0.10), transparent 60%)' }}>
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#6c47ff] flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-[#e8e8f4]">Flowmatic</span>
        </Link>

        <div 
          className="bg-[#0f0f1c] border border-[#1e1e35] rounded-[var(--radius-lg)] p-8"
          style={{ boxShadow: '0 24px 64px rgba(0, 0, 0, 0.4)' }}
        >
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-[#e8e8f4] mb-2">Create your account</h1>
            <p className="text-[#6b6b9a]">Start automating your workflows today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={setName}
              icon={<User className="w-4 h-4" />}
              required
            />

            <Input
              label="Work email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={setEmail}
              icon={<Mail className="w-4 h-4" />}
              required
            />

            <div>
              <Input
                label="Password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={setPassword}
                required
              />
              {password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    <div className={`h-1 flex-1 rounded ${passwordStrength === 'weak' ? 'bg-[#f04438]' : passwordStrength === 'medium' ? 'bg-[#f5a623]' : 'bg-[#00c48c]'}`} />
                    <div className={`h-1 flex-1 rounded ${passwordStrength === 'medium' || passwordStrength === 'strong' ? 'bg-[#f5a623]' : 'bg-[#161626]'}`} />
                    <div className={`h-1 flex-1 rounded ${passwordStrength === 'strong' ? 'bg-[#00c48c]' : 'bg-[#161626]'}`} />
                  </div>
                  <p className="text-xs text-[#6b6b9a]">
                    Password strength: {passwordStrength}
                  </p>
                </div>
              )}
            </div>

            <Input
              label="Confirm password"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={setConfirmPassword}
              icon={<Lock className="w-4 h-4" />}
              required
            />

            {error && <p className="text-sm text-[#f04438]">{error}</p>}

            <label className="flex items-start gap-2 text-sm text-[#6b6b9a]">
              <input type="checkbox" className="mt-0.5 rounded border-[#1e1e35]" required />
              <span>
                I agree to the{' '}
                <Link href="#" className="text-[#6c47ff] hover:text-[#00d4aa]">Terms of Service</Link>
                {' '}and{' '}
                <Link href="#" className="text-[#6c47ff] hover:text-[#00d4aa]">Privacy Policy</Link>
              </span>
            </label>

            <Button type="submit" className="w-full" loading={loading}>
              Create account
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
            <Button variant="secondary">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </Button>
            <Button variant="secondary">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>

        <p className="text-center text-sm text-[#6b6b9a] mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-[#6c47ff] hover:text-[#00d4aa]">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
