import React, { forwardRef, useId } from 'react';
import { ValidationState } from '../types/tokens';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  validationState?: ValidationState;
  showCount?: boolean;
  maxLength?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helperText, error, validationState = 'default', id: customId, disabled, maxLength, showCount, value, className = '', ...props }, ref) => {
    const generatedId = useId();
    const id = customId || generatedId;
    const currentLength = typeof value === 'string' ? value.length : 0;
    const state: ValidationState = error ? 'error' : validationState;

    return (
      <div className={`textarea-field-group ${disabled ? 'is-disabled' : ''}`}>
        {label && <label htmlFor={id} className="field-label">{label}</label>}
        <textarea
          ref={ref}
          id={id}
          disabled={disabled}
          maxLength={maxLength}
          aria-invalid={state === 'error'}
          className={`textarea-control state-${state} ${className}`}
          {...props}
        />
        <div className="field-meta">
          {error ? (
            <span role="alert" className="text-error">{error}</span>
          ) : (
            <span className="text-helper">{helperText}</span>
          )}
          {showCount && maxLength && (
            <span className="character-count" aria-live="polite">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';