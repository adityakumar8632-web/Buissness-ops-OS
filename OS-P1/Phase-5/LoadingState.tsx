import React from "react";
import { BaseStateProps } from "./state-types";
import { BaseStateView } from "./BaseStateView";

export const LoadingState: React.FC<BaseStateProps> = ({
  title = "Loading data...",
  description = "Please wait while we retrieve the latest records.",
  icon,
  ...props
}) => {
  const defaultSpinner = (
    <svg className="h-9 w-9 animate-spin text-indigo-600" viewBox="0 0 24 24" fill="none">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );

  return (
    <BaseStateView
      icon={icon || defaultSpinner}
      title={title}
      description={description}
      aria-busy="true"
      aria-live="polite"
      {...props}
    />
  );
};
