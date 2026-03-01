'use client';

import { type ReactNode } from 'react';
import { Button } from './Button';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      {icon && (
        <div className="w-12 h-12 mb-4 text-[#6b6b9a]">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-medium text-[#e8e8f4] mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-[#6b6b9a] mb-4 max-w-sm">{description}</p>
      )}
      {action && (
        <Button onClick={action.onClick} variant="secondary">
          {action.label}
        </Button>
      )}
    </div>
  );
}

export { EmptyState };
