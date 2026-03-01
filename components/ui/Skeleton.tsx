'use client';

import type { SkeletonProps } from '@/types';

function Skeleton({ variant = 'text', width, height, className = '' }: SkeletonProps) {
  const variants = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  return (
    <div
      className={`
        animate-pulse bg-[#161626]
        ${variants[variant]}
        ${className}
      `}
      style={{
        width: width || (variant === 'circular' ? 40 : '100%'),
        height: height || (variant === 'text' ? 16 : (variant === 'circular' ? 40 : 100)),
      }}
    />
  );
}

export { Skeleton };
