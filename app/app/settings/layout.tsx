'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, User, CreditCard, Users, Bell, Shield, Palette } from 'lucide-react';

const settingsNav = [
  { href: '/app/settings/profile', label: 'Profile', icon: User },
  { href: '/app/settings/billing', label: 'Billing', icon: CreditCard },
  { href: '/app/settings/team', label: 'Team', icon: Users },
];

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#e8e8f4]">Settings</h1>
        <p className="text-[#6b6b9a]">Manage your account and preferences</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Navigation */}
        <nav className="md:w-64 flex-shrink-0">
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {settingsNav.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-2.5 rounded-lg whitespace-nowrap
                    transition-all duration-200
                    ${isActive 
                      ? 'bg-[#6c47ff]/10 text-[#6c47ff]' 
                      : 'text-[#6b6b9a] hover:text-[#e8e8f4] hover:bg-[#161626]'}
                  `}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
}
