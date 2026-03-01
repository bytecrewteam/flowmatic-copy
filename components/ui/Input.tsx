'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  autoComplete?: string;
}

export function Input({
  label,
  error,
  icon,
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  disabled,
  required,
  name,
  id,
  autoComplete,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-[#e8e8f4] mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b6b9a]">
            {icon}
          </div>
        )}
        <input
          id={id}
          name={name}
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          className={`
            w-full h-10 px-3 ${icon ? 'pl-10' : ''} ${isPassword ? 'pr-10' : ''}
            bg-[#0f0f1c] border rounded-lg text-[#e8e8f4] placeholder-[#6b6b9a]
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-[#6c47ff] focus:border-transparent
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-[#f04438] focus:ring-[#f04438]' : 'border-[#1e1e35] hover:border-[#2a2a45]'}
            ${className}
          `}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6b9a] hover:text-[#e8e8f4] transition-colors"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-[#f04438]">{error}</p>
      )}
    </div>
  );
}
