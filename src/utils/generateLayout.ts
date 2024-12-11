// src/utils/generateLayout.ts
import { DEFAULT_BREAKPOINTS, generateMediaQuery } from "../config/breakpoints";

export const generateGridStyles = (columns: number, gap: string = "1rem") => {
  const styles = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap,
  };
  return styles;
};

export const generateResponsiveGridStyles = (
  breakpoints = DEFAULT_BREAKPOINTS
) => {
  const styles: Record<string, any> = {
    display: "grid",
    gap: "1rem",
  };

  Object.entries(breakpoints).forEach(([key, value]) => {
    styles[generateMediaQuery(value)] = {
      gridTemplateColumns: `repeat(${
        key === "sm" ? 1 : key === "md" ? 2 : 4
      }, 1fr)`,
    };
  });

  return styles;
};
