export const breakpoints = {
  sm:  '640px',   // Small mobile/landscape
  md:  '768px',   // Tablets & compact split-screens
  lg:  '1024px',  // Small desktops, laptops
  xl:  '1280px',  // Standard operational workstation
  '2xl': '1536px',// Extended high-res widescreen
} as const;

export const mediaQueries = {
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  '2xl': `(min-width: ${breakpoints['2xl']})`,
} as const;