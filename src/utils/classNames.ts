import clsx from "clsx";

export const classNames = (
  ...classes: (string | undefined | null | boolean)[]
) => {
  return clsx(classes);
};
