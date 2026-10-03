import React, { forwardRef, useId } from 'react';
import { ComponentSize, ValidationState } from '../types/tokens';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  validationState?: ValidationState;
  size?: ComponentSize;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      validationState = 'default',
      size = 'md',
      id: customId,
      disabled,
      leftAddon,
      rightAddon,
      className = '',
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = customId || generatedId;
    const errorId = `${id}-error`;
    const helperId = `${id}-helper`;

    const state: ValidationState = error ? 'error' : validationState;

    return (
      <div className={`input-field-group input-${size} ${disabled ? 'is-disabled' : ''}`}>
        {label && (
          <label htmlFor={id} className="field-label">
            {label}
          </label>
        )}
        <div className={`input-wrapper state-${state}`}>
          {leftAddon && <span className="addon left">{leftAddon}</span>}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            aria-invalid={state === 'error'}
            aria-describedby={error ? errorId : helperText ? helperId : undefined}
            className={`input-control ${className}`}
            {...props}
          />
          {rightAddon && <span className="addon right">{rightAddon}</span>}
        </div>
        {error && (
          <p id={errorId} className="field-message text-error" role="alert">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={helperId} className="field-message text-helper">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';