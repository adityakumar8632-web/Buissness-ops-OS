import React from "react";
import { BaseStateProps } from "./state-types";
import { BaseStateView } from "./BaseStateView";

export const SuccessState: React.FC<BaseStateProps> = ({
  title = "Operation Successful",
  description = "Your changes have been processed and saved.",
  icon,
  ...props
}) => {
  const defaultIcon = (
    <div className="rounded-full bg-emerald-50 p-4 text-emerald-500 dark:bg-emerald-950/40">
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
  );

  return (
    <BaseStateView
      icon={icon || defaultIcon}
      title={title}
      description={description}
      {...props}
    />
  );
};
