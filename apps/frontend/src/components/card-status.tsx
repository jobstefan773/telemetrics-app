import React from "react";

export interface StatusIndicatorProps {
  label: string;
  color: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Renders a small coloured circle followed by a text label.
 */
export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  label,
  color,
  size = 10,
  className,
  style,
}) => {
  const dotStyle: React.CSSProperties = {
    display: "inline-block",
    width: size,
    height: size,
    borderRadius: "50%",
    backgroundColor: color,
    marginRight: 6,
  };

  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", ...style }}
    >
      <span style={dotStyle} />
      <span>{label}</span>
    </span>
  );
};
