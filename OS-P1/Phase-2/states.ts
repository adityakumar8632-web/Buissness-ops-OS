export const states = {
  input: {
    default: {
      border: 'var(--color-border-default)',
      bg: 'var(--color-surface-base)',
      text: 'var(--color-text-primary)',
      placeholder: 'var(--color-text-placeholder)',
    },
    hover: {
      border: 'var(--color-border-strong)',
      bg: 'var(--color-surface-base)',
    },
    focus: {
      border: 'var(--color-border-focus)',
      shadow: 'var(--shadow-focus-brand)',
    },
    disabled: {
      border: 'var(--color-border-subtle)',
      bg: 'var(--color-surface-subtle)',
      text: 'var(--color-text-muted)',
      cursor: 'not-allowed',
    },
    error: {
      border: 'var(--color-status-danger)',
      shadow: 'var(--shadow-focus-error)',
      text: 'var(--color-text-primary)',
    },
  },
  button: {
    primary: {
      bg: 'var(--color-interactive-primary)',
      text: 'var(--color-text-inverse)',
      hoverBg: 'var(--color-interactive-primary-hover)',
      activeBg: 'var(--color-interactive-primary-active)',
      disabledBg: 'var(--color-interactive-disabled)',
    },
    secondary: {
      bg: 'var(--color-surface-base)',
      border: 'var(--color-border-default)',
      text: 'var(--color-text-primary)',
      hoverBg: 'var(--color-surface-subtle)',
      activeBg: 'var(--color-surface-sunken)',
      disabledBg: 'var(--color-surface-subtle)',
    },
  },
  status: {
    neutral: {
      bg: 'var(--color-surface-subtle)',
      text: 'var(--color-text-secondary)',
      border: 'var(--color-border-subtle)',
    },
    success: {
      bg: 'var(--color-status-success-subtle)',
      text: 'var(--color-status-success)',
      border: 'var(--color-status-success-border)',
    },
    warning: {
      bg: 'var(--color-status-warning-subtle)',
      text: 'var(--color-status-warning)',
      border: 'var(--color-status-warning-border)',
    },
    danger: {
      bg: 'var(--color-status-danger-subtle)',
      text: 'var(--color-status-danger)',
      border: 'var(--color-status-danger-border)',
    },
  },
} as const;