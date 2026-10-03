import React, { forwardRef, useId } from 'react';
import { ComponentSize, ValidationState } from '../types/tokens';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: SelectOption[];
  label?: string;
  error?: string;
  size?: ComponentSize;
  validationState?: ValidationState;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, label, error, size = 'md', validationState = 'default', id: customId, disabled, ...props }, ref) => {
    const generatedId = useId();
    const id = customId || generatedId;
    const state = error ? 'error' : validationState;

    return (
      <div className={`select-group select-${size} ${disabled ? 'is-disabled' : ''}`}>
        {label && <label htmlFor={id} className="field-label">{label}</label>}
        <div className={`select-wrapper state-${state}`}>
          <select ref={ref} id={id} disabled={disabled} aria-invalid={state === 'error'} className="select-control" {...props}>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="select-caret" aria-hidden="true">▾</span>
        </div>
        {error && <span role="alert" className="text-error">{error}</span>}
      </div>
    );
  }
);
Select.displayName = 'Select';