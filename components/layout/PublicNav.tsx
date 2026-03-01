'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useUIStore } from '@/lib/store/useUIStore';

const navLinks = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/integrations', label: 'Integrations' },
];

export function PublicNav() {
  const pathname = usePathname();
  const { mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu } = useUIStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, setMobileMenuOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-[#060610]/90 backdrop-blur-md border-b border-[#1f1f3d]' : ''}
      `}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#7c5cff] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(124,92,255,0.4)] transition-shadow">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-[#eeeef8]">Flowmatic</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-sm font-medium transition-colors
                ${pathname === link.href ? 'text-[#eeeef8]' : 'text-[#6868a0] hover:text-[#eeeef8]'}
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Start free trial</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#6868a0] hover:text-[#eeeef8] transition-colors"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-[#060610] z-40 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-3 rounded-lg text-base font-medium transition-colors
                  ${pathname === link.href 
                    ? 'bg-[#13132a] text-[#eeeef8]' 
                    : 'text-[#6868a0] hover:bg-[#13132a] hover:text-[#eeeef8]'}
                `}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-[#1f1f3d] my-2" />
            <Link href="/login" className="px-4 py-3 text-[#6868a0] hover:text-[#eeeef8] transition-colors">
              Log in
            </Link>
            <Link href="/signup" className="px-4 py-3 text-center rounded-lg bg-[#7c5cff] text-white font-medium hover:bg-[#6b4de8] transition-colors">
              Start free trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
