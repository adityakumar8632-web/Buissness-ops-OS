import React from "react";

export const Skeleton: React.FC<SkeletonProps> = ({
  className = "",
  variant = "rectangular",
  count = 1,
  width,
  height,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "circular":
        return "rounded-full aspect-square";
      case "text":
        return "h-4 rounded my-1 w-full";
      case "card":
        return "h-40 rounded-xl w-full";
      case "table-row":
        return "h-12 rounded-md w-full";
      case "rectangular":
      default:
        return "rounded-md";
    }
  };

  const style: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          style={style}
          className={`animate-pulse bg-slate-200 dark:bg-slate-800 ${getVariantStyles()} ${className}`}
          aria-hidden="true"
        />
      ))}
    </>
  );
};
