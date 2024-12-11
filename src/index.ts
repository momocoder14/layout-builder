// src/index.ts

// Exporting the ResponsiveContainer component
export { default as ResponsiveContainer } from "./components/ResponsiveContainer";

// Exporting utility functions for grid generation and class management
export {
  generateGridStyles,
  generateResponsiveGridStyles,
} from "./utils/generateLayout";
export { classNames } from "./utils/classNames";

// Exporting default breakpoints for easy customization
export { DEFAULT_BREAKPOINTS, generateMediaQuery } from "./config/breakpoints";
