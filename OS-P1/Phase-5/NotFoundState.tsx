import React from "react";
import { BaseStateProps } from "./state-types";
import { BaseStateView } from "./BaseStateView";

export const NotFoundState: React.FC<BaseStateProps> = ({
  title = "Resource Not Found",
  description = "The requested entity does not exist or has been removed.",
  icon,
  ...props
}) => {
  const defaultIcon = (
    <div className="rounded-full bg-slate-100 p-4 text-slate-500 dark:bg-slate-800">
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
