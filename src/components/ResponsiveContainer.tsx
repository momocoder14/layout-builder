// src/components/ResponsiveContainer.tsx
import React, { CSSProperties, FC } from "react";
import { generateGridStyles } from "../utils/generateLayout";

interface ResponsiveContainerProps {
  children: React.ReactNode;
  columns?: number;
  gap?: string;
  style?: CSSProperties;
  className?: string;
}

const ResponsiveContainer: FC<ResponsiveContainerProps> = ({
  children,
  columns = 3,
  gap = "1rem",
  style,
  className,
}) => {
  const gridStyles = generateGridStyles(columns, gap);

  return (
    <div style={{ ...gridStyles, ...style }} className={className}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;
