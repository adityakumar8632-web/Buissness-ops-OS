import React, { forwardRef } from 'react';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, disabled, className = '', ...props }, ref) => {
    return (
      <label className={`radio-container ${disabled ? 'is-disabled' : ''} ${className}`}>
        <input
          ref={ref}
          type="radio"
          disabled={disabled}
          className="radio-native sr-only"
          {...props}
        />
        <span className="radio-visual" aria-hidden="true" />
        {label && <span className="radio-label">{label}</span>}
      </label>
    );
  }
);
Radio.displayName = 'Radio';