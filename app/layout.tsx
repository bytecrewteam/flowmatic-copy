import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Toast } from '@/components/ui/Toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Flowmatic - Automate the boring. Ship the brilliant.',
  description: 'Flowmatic connects your tools, eliminates repetitive tasks, and gives your team time back — all without writing a single line of code.',
  keywords: ['workflow automation', 'no-code', 'productivity', 'automation'],
  openGraph: {
    title: 'Flowmatic - Automate the boring. Ship the brilliant.',
    description: 'Flowmatic connects your tools, eliminates repetitive tasks, and gives your team time back.',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flowmatic - Automate the boring. Ship the brilliant.',
    description: 'Connect your tools, eliminate repetitive tasks, and give your team time back.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
        <Toast />
      </body>
    </html>
  );
}
