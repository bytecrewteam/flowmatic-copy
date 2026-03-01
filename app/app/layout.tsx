'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/lib/store/useAuthStore';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { useUIStore } from '@/lib/store/useUIStore';

// Derive a readable page title from the current pathname
function getPageTitle(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  // e.g. /app/settings/billing → ['app', 'settings', 'billing'] → 'Billing'
  const last = segments[segments.length - 1];
  if (!last || last === 'app') return 'Dashboard';
  return last.charAt(0).toUpperCase() + last.slice(1);
}

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = useAuthStore();
  const { sidebarCollapsed } = useUIStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  // FIX: Show a loading state instead of null to prevent flash of empty screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#07070f] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#6c47ff] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07070f]">
      <Sidebar />
      {/* FIX: Use md: prefix so margins only apply when sidebar is visible (desktop).
          On mobile, sidebar returns null so no margin is needed. */}
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'md:ml-16' : 'md:ml-60'}`}>
        {/* FIX: Dynamic title derived from pathname instead of hardcoded "Dashboard" */}
        <TopBar title={getPageTitle(pathname)} />
        <main className="p-6 pt-20">
          {children}
        </main>
      </div>
    </div>
  );
}
