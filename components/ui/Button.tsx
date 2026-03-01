'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', loading, disabled, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070f] disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97]';

    const variants = {
      primary: 'bg-[#6c47ff] text-white hover:bg-[#5a3de6] focus-visible:ring-[#6c47ff]',
      secondary: 'bg-[#161626] text-[#e8e8f4] border border-[#1e1e35] hover:bg-[#1e1e35] hover:border-[#2a2a45] focus-visible:ring-[#6c47ff]',
      ghost: 'text-[#6b6b9a] hover:text-[#e8e8f4] hover:bg-[#161626] focus-visible:ring-[#6c47ff]',
      destructive: 'bg-[#f04438] text-white hover:bg-[#d93830] focus-visible:ring-[#f04438]',
    };

    const sizes = {
      sm: 'h-8 px-3 text-sm gap-1.5',
      md: 'h-10 px-4 text-sm gap-2',
      lg: 'h-12 px-6 text-base gap-2',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
