// src/__tests__/generateLayout.test.ts
import { generateGridStyles } from "../utils/generateLayout";

test("generates grid styles", () => {
  const styles = generateGridStyles(3, "10px");
  expect(styles).toEqual({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  });
});
