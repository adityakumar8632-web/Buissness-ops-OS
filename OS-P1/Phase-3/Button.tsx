import React, { forwardRef } from 'react';
import { ComponentSize, ComponentVariant } from '../types/tokens';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ComponentVariant;
  size?: ComponentSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading}
        data-loading={loading}
        data-variant={variant}
        data-size={size}
        className={`btn btn-${variant} btn-${size} ${className}`}
        {...props}
      >
        {loading && (
          <span className="btn-spinner" aria-hidden="true" role="status">
            <svg viewBox="0 0 24 24" className="animate-spin h-4 w-4" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
          </span>
        )}
        {!loading && leftIcon && <span className="btn-icon-left">{leftIcon}</span>}
        <span className={`btn-label ${loading ? 'opacity-0 select-none' : ''}`}>{children}</span>
        {!loading && rightIcon && <span className="btn-icon-right">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = 'Button';