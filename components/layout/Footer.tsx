'use client';

import Link from 'next/link';
import { Zap, Twitter, Linkedin, Github } from 'lucide-react';

const currentYear = new Date().getFullYear();

const footerLinks = {
  product: [
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Status', href: '/status' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Security', href: '/security' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0d0d1f] border-t border-[#1f1f3d]">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#7c5cff] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-[#eeeef8]">Flowmatic</span>
            </Link>
            <p className="text-sm text-[#6868a0] mb-4 max-w-xs">
              Built for teams that ship. Automate the boring, ship the brilliant.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#6868a0] hover:text-[#eeeef8] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#6868a0] hover:text-[#eeeef8] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#6868a0] hover:text-[#eeeef8] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#eeeef8] mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#6868a0] hover:text-[#eeeef8] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#eeeef8] mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#6868a0] hover:text-[#eeeef8] transition-colors flex items-center gap-2">
                    {link.label}
                    {link.label === 'Careers' && (
                      <span className="px-1.5 py-0.5 text-xs bg-[#00e5b8]/10 text-[#00e5b8] rounded">
                        Hiring
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#eeeef8] mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#6868a0] hover:text-[#eeeef8] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1f1f3d] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6868a0]">
            © {currentYear} Flowmatic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
