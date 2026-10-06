import React from "react";
import { PermissionDeniedProps } from "./state-types";
import { BaseStateView } from "./BaseStateView";

export const PermissionDenied: React.FC<PermissionDeniedProps> = ({
  title = "Access Restricted",
  description = "You don't have the required permissions to view this resource.",
  requiredRole,
  onRequestAccess,
  action,
  icon,
  ...props
}) => {
  const defaultIcon = (
    <div className="rounded-full bg-amber-50 p-4 text-amber-500 dark:bg-amber-950/40">
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    </div>
  );

  const defaultAction = onRequestAccess ? (
    <button
      onClick={onRequestAccess}
      className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
    >
      Request Access
    </button>
  ) : null;

  return (
    <BaseStateView
      icon={icon || defaultIcon}
      title={title}
      description={
        requiredRole ? `${description} Required level: ${requiredRole}.` : description
      }
      action={action || defaultAction}
      {...props}
    />
  );
};
