'use client';

import type { BadgeProps } from '@/types';

function Badge({ variant = 'neutral', dot = false, children, className = '' }: BadgeProps) {
  const variants = {
    success: 'bg-[#00c48c]/10 text-[#00c48c] border-[#00c48c]/20',
    warning: 'bg-[#f5a623]/10 text-[#f5a623] border-[#f5a623]/20',
    error: 'bg-[#f04438]/10 text-[#f04438] border-[#f04438]/20',
    info: 'bg-[#0099ff]/10 text-[#0099ff] border-[#0099ff]/20',
    neutral: 'bg-[#161626] text-[#6b6b9a] border-[#1e1e35]',
  };

  const dotColors = {
    success: 'bg-[#00c48c]',
    warning: 'bg-[#f5a623]',
    error: 'bg-[#f04438]',
    info: 'bg-[#0099ff]',
    neutral: 'bg-[#6b6b9a]',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border
        ${variants[variant]} ${className}
      `}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />
      )}
      {children}
    </span>
  );
}

export { Badge };
