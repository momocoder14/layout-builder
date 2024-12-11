// src/config/breakpoints.ts
export const DEFAULT_BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export const generateMediaQuery = (breakpoint: string) =>
  `@media (min-width: ${breakpoint})`;
