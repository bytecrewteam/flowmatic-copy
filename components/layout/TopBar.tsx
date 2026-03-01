'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, Bell, User, Settings, CreditCard, LogOut, ChevronDown } from 'lucide-react';
import { useUIStore } from '@/lib/store/useUIStore';
import { useAuthStore } from '@/lib/store/useAuthStore';
import { useNotificationStore } from '@/lib/store/useNotificationStore';

interface TopBarProps {
  title: string;
}

export function TopBar({ title }: TopBarProps) {
  const { setCommandPaletteOpen } = useUIStore();
  const { user, logout } = useAuthStore();
  const { unreadCount } = useNotificationStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
  };

  return (
    <header className="h-16 bg-[#07070f]/80 backdrop-blur-md border-b border-[#1e1e35] flex items-center justify-between px-6 sticky top-0 z-30">
      <h1 className="text-xl font-semibold text-[#e8e8f4]">{title}</h1>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setCommandPaletteOpen(true)}
          className="flex items-center gap-2 px-3 py-2 bg-[#0f0f1c] border border-[#1e1e35] rounded-lg text-[#6b6b9a] hover:border-[#2a2a45] transition-colors"
        >
          <Search className="w-4 h-4" />
          <span className="text-sm hidden sm:inline">Search...</span>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-xs bg-[#161626] rounded text-[#6b6b9a]">
            <span>⌘</span>K
          </kbd>
        </button>

        <Link
          href="/app/notifications"
          className="relative p-2 text-[#6b6b9a] hover:text-[#e8e8f4] transition-colors rounded-lg hover:bg-[#161626]"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#f04438] rounded-full" />
          )}
        </Link>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-[#161626] transition-colors"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <div className="w-8 h-8 rounded-full bg-[#6c47ff] flex items-center justify-center">
              {user?.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
              ) : (
                <span className="text-sm font-medium text-white">
                  {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                </span>
              )}
            </div>
            <ChevronDown className={`w-4 h-4 text-[#6b6b9a] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-[#0f0f1c] border border-[#1e1e35] rounded-xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-3 py-2 border-b border-[#1e1e35] mb-2">
                <p className="text-sm font-medium text-[#e8e8f4]">{user?.name || 'User'}</p>
                <p className="text-xs text-[#6b6b9a]">{user?.email || ''}</p>
              </div>
              
              <Link
                href="/app/settings/profile"
                className="flex items-center gap-2 px-3 py-2 text-sm text-[#6b6b9a] hover:text-[#e8e8f4] hover:bg-[#161626] transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                <User className="w-4 h-4" />
                Profile
              </Link>
              <Link
                href="/app/settings/billing"
                className="flex items-center gap-2 px-3 py-2 text-sm text-[#6b6b9a] hover:text-[#e8e8f4] hover:bg-[#161626] transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                <CreditCard className="w-4 h-4" />
                Billing
              </Link>
              <Link
                href="/app/settings/profile"
                className="flex items-center gap-2 px-3 py-2 text-sm text-[#6b6b9a] hover:text-[#e8e8f4] hover:bg-[#161626] transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                <Settings className="w-4 h-4" />
                Settings
              </Link>
              
              <div className="border-t border-[#1e1e35] mt-2 pt-2">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full px-3 py-2 text-sm text-[#f04438] hover:bg-[#f04438]/10 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
