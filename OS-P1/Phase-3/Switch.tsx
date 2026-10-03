import React, { forwardRef } from 'react';
import { ComponentSize } from '../types/tokens';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: ComponentSize;
  id?: string;
  name?: string;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked, onChange, label, disabled = false, size = 'md', id, name }, ref) => {
    return (
      <label className={`switch-container switch-${size} ${disabled ? 'is-disabled' : ''}`}>
        <button
          ref={ref}
          id={id}
          role="switch"
          type="button"
          aria-checked={checked}
          disabled={disabled}
          onClick={() => !disabled && onChange(!checked)}
          className="switch-track"
        >
          <span className="switch-thumb" />
        </button>
        {label && <span className="switch-label">{label}</span>}
        {name && <input type="hidden" name={name} value={checked ? 'true' : 'false'} />}
      </label>
    );
  }
);
Switch.displayName = 'Switch';