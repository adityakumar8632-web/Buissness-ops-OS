import React, { forwardRef, useEffect, useRef } from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  indeterminate?: boolean;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate = false, error, id, disabled, className = '', ...props }, ref) => {
    const defaultRef = useRef<HTMLInputElement>(null);
    const resolvedRef = (ref || defaultRef) as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, resolvedRef]);

    return (
      <label className={`checkbox-container ${disabled ? 'is-disabled' : ''} ${className}`}>
        <input
          ref={resolvedRef}
          type="checkbox"
          id={id}
          disabled={disabled}
          aria-invalid={!!error}
          aria-checked={indeterminate ? 'mixed' : props.checked}
          className="checkbox-native sr-only"
          {...props}
        />
        <span className="checkbox-visual" aria-hidden="true" />
        {label && <span className="checkbox-label">{label}</span>}
      </label>
    );
  }
);
Checkbox.displayName = 'Checkbox';