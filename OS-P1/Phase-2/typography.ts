export const typography = {
  fonts: {
    sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
  },
  sizes: {
    '2xs': ['0.6875rem', { lineHeight: '0.875rem' }], // 11px / 14px (KPI labels, badges)
    xs:    ['0.75rem',   { lineHeight: '1rem' }],     // 12px / 16px (Meta, table caps)
    sm:    ['0.875rem',  { lineHeight: '1.25rem' }],  // 14px / 20px (Body default, inputs)
    base:  ['1rem',      { lineHeight: '1.5rem' }],   // 16px / 24px (Lead text, headers)
    lg:    ['1.125rem',  { lineHeight: '1.75rem' }],  // 18px / 28px (Subheadings)
    xl:    ['1.25rem',   { lineHeight: '1.75rem' }],  // 20px / 28px (Section titles)
    '2xl': ['1.5rem',    { lineHeight: '2rem' }],     // 24px / 32px (Page titles)
    '3xl': ['1.875rem',  { lineHeight: '2.25rem' }],  // 30px / 36px (KPI values, displays)
  },
  weights: {
    regular:  '400',
    medium:   '500',
    semibold: '600',
    bold:     '700',
  },
  tracking: {
    tighter: '-0.03em',
    tight:   '-0.015em',
    normal:  '0em',
    wide:    '0.025em',
  },
} as const;