'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Zap, LayoutDashboard, FolderKanban, GitBranch, 
  BarChart3, Bell, Settings, ChevronLeft, ChevronRight, 
  LogOut, User
} from 'lucide-react';
import { useUIStore } from '@/lib/store/useUIStore';
import { useAuthStore } from '@/lib/store/useAuthStore';
import { useNotificationStore } from '@/lib/store/useNotificationStore';

const navItems = [
  { href: '/app/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/app/projects', label: 'Projects', icon: FolderKanban },
  { href: "/app/automations", label: "Automations", icon: GitBranch },
  { href: '/app/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/app/notifications', label: 'Notifications', icon: Bell, badge: true },
];

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarCollapsed, toggleSidebar } = useUIStore();
  const { user, logout } = useAuthStore();
  const { unreadCount } = useNotificationStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't render sidebar on mobile (bottom nav will be used)
  if (isMobile) return null;

  return (
    <aside
      className={`
        fixed left-0 top-0 bottom-0 z-40
        bg-[#0f0f1c] border-r border-[#1e1e35]
        transition-all duration-300 flex flex-col
        ${sidebarCollapsed ? 'w-16' : 'w-60'}
      `}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-[#1e1e35]">
        <Link href="/app/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#6c47ff] flex items-center justify-center flex-shrink-0">
            <Zap className="w-5 h-5 text-white" />
          </div>
          {!sidebarCollapsed && (
            <span className="text-lg font-semibold text-[#e8e8f4]">Flowmatic</span>
          )}
        </Link>
        <button
          onClick={toggleSidebar}
          className="p-1.5 text-[#6b6b9a] hover:text-[#e8e8f4] transition-colors rounded-lg hover:bg-[#161626]"
          aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-2 overflow-y-auto" aria-label="Sidebar navigation">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            const Icon = item.icon;
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg
                    transition-all duration-200
                    ${isActive 
                      ? 'bg-[#6c47ff]/10 text-[#6c47ff]' 
                      : 'text-[#6b6b9a] hover:text-[#e8e8f4] hover:bg-[#161626]'}
                    ${sidebarCollapsed ? 'justify-center' : ''}
                  `}
                  title={sidebarCollapsed ? item.label : undefined}
                >
                  <div className="relative">
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {item.badge && unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#f04438] text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                        {unreadCount}
                      </span>
                    )}
                  </div>
                  {!sidebarCollapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-[#1e1e35] p-2">
        {/* Settings */}
        <Link
          href="/app/settings/profile"
          className={`
            flex items-center gap-3 px-3 py-2.5 rounded-lg mb-2
            text-[#6b6b9a] hover:text-[#e8e8f4] hover:bg-[#161626]
            transition-all duration-200
            ${sidebarCollapsed ? 'justify-center' : ''}
          `}
          title={sidebarCollapsed ? 'Settings' : undefined}
        >
          <Settings className="w-5 h-5 flex-shrink-0" />
          {!sidebarCollapsed && <span className="text-sm font-medium">Settings</span>}
        </Link>

        {/* User */}
        <div className={`
          flex items-center gap-3 p-2 rounded-lg
          ${sidebarCollapsed ? 'justify-center' : ''}
        `}>
          <div className="w-8 h-8 rounded-full bg-[#6c47ff] flex items-center justify-center flex-shrink-0">
            {user?.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
            ) : (
              <span className="text-sm font-medium text-white">
                {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
              </span>
            )}
          </div>
          {!sidebarCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#e8e8f4] truncate">{user?.name || 'User'}</p>
              <p className="text-xs text-[#6b6b9a] truncate">{user?.email || ''}</p>
            </div>
          )}
          {!sidebarCollapsed && (
            <button
              onClick={logout}
              className="p-1.5 text-[#6b6b9a] hover:text-[#f04438] transition-colors rounded-lg hover:bg-[#161626]"
              aria-label="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
