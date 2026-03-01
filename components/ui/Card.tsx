'use client';

import type { CardProps } from '@/types';

function Card({ hover = false, children, className = '' }: CardProps) {
  return (
    <div
      className={`
        bg-[#0f0f1c] border border-[#1e1e35] rounded-xl
        ${hover ? 'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-[#2a2a45]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-5 pb-0 ${className}`}>{children}</div>;
}

function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}

function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-5 pt-0 ${className}`}>{children}</div>;
}

export { Card, CardHeader, CardContent, CardFooter };
