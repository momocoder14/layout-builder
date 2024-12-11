import React, { CSSProperties } from "react";
import { generateGridStyles } from "../utils/generateLayout";

interface ResponsiveContainerProps {
  children: React.ReactNode;
  columns?: number;
  gap?: string;
  style?: CSSProperties;
  className?: string;
}

const ResponsiveContainer = ({
  children,
  columns = 3,
  gap = "1rem",
  style,
  className,
}: ResponsiveContainerProps) => {
  const gridStyles = generateGridStyles(columns, gap);

  return (
    <div style={{ ...gridStyles, ...style }} className={className}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;
