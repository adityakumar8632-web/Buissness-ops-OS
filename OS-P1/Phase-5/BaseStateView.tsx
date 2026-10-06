import React from "react";
import { BaseStateProps } from "./state-types";

const sizeMap = {
  sm: "py-6 px-4 max-w-sm text-center",
  md: "py-12 px-6 max-w-md text-center",
  lg: "py-20 px-8 max-w-lg text-center",
  fullscreen: "min-h-[70vh] flex flex-col justify-center items-center p-8 text-center",
};

export const BaseStateView: React.FC<BaseStateProps> = ({
  title,
  description,
  icon,
  action,
  secondaryAction,
  className = "",
  size = "md",
}) => {
  return (
    <div className={`mx-auto flex flex-col items-center justify-center ${sizeMap[size]} ${className}`}>
      {icon && (
        <div className="mb-4 flex items-center justify-center text-slate-400 dark:text-slate-500">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          {title}
        </h3>
      )}
      {description && (
        <div className="mt-1.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
          {description}
        </div>
      )}
      {(action || secondaryAction) && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {action}
          {secondaryAction}
        </div>
      )}
    </div>
  );
};
