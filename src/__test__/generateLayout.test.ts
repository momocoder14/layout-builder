import {
  generateGridStyles,
  generateResponsiveGridStyles,
} from "../utils/generateLayout";
import { DEFAULT_BREAKPOINTS } from "../config/breakpoints";

test("generateGridStyles generates correct grid styles", () => {
  const styles = generateGridStyles(3, "10px");
  expect(styles).toEqual({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  });
});

test("generateResponsiveGridStyles generates correct responsive grid styles", () => {
  const responsiveStyles = generateResponsiveGridStyles(DEFAULT_BREAKPOINTS);

  // Test for sm breakpoint
  expect(responsiveStyles["@media (min-width: 640px)"]).toEqual({
    gridTemplateColumns: "repeat(1, 1fr)",
  });

  // Test for md breakpoint
  expect(responsiveStyles["@media (min-width: 768px)"]).toEqual({
    gridTemplateColumns: "repeat(2, 1fr)",
  });

  // Test for lg breakpoint
  expect(responsiveStyles["@media (min-width: 1024px)"]).toEqual({
    gridTemplateColumns: "repeat(4, 1fr)",
  });
});
