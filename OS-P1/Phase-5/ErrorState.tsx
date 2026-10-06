import React from "react";
import { ErrorStateProps } from "./state-types";
import { BaseStateView } from "./BaseStateView";

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Unable to load data",
  description,
  error,
  onRetry,
  retryText = "Try again",
  action,
  icon,
  ...props
}) => {
  const errorMessage = typeof error === "string" ? error : error?.message;

  const defaultIcon = (
    <div className="rounded-full bg-rose-50 p-4 text-rose-500 dark:bg-rose-950/40">
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    </div>
  );

  const defaultAction = onRetry ? (
    <button
      onClick={onRetry}
      className="inline-flex items-center rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
    >
      {retryText}
    </button>
  ) : null;

  return (
    <BaseStateView
      icon={icon || defaultIcon}
      title={title}
      description={description || errorMessage || "An unexpected error occurred while processing your request."}
      action={action || defaultAction}
      {...props}
    />
  );
};
