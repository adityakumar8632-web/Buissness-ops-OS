import React, { forwardRef } from 'react';
import { ComponentSize, ComponentVariant } from '../types/tokens';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  'aria-label': string; // Strictly required for accessibility
  variant?: ComponentVariant;
  size?: ComponentSize;
  loading?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, 'aria-label': ariaLabel, variant = 'ghost', size = 'md', loading = false, disabled = false, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        disabled={disabled || loading}
        aria-busy={loading}
        className={`icon-btn icon-btn-${variant} icon-btn-${size} ${className}`}
        {...props}
      >
        {loading ? <span className="icon-spinner animate-spin" aria-hidden="true">◌</span> : icon}
      </button>
    );
  }
);
IconButton.displayName = 'IconButton';