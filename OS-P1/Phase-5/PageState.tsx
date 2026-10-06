import React, { ReactNode } from "react";
import { PageStatus, ErrorStateProps, PermissionDeniedProps, BaseStateProps } from "./state-types";
import { LoadingState } from "./LoadingState";
import { Skeleton } from "./Skeleton";
import { EmptyState } from "./EmptyState";
import { ErrorState } from "./ErrorState";
import { PermissionDenied } from "./PermissionDenied";
import { SuccessState } from "./SuccessState";
import { NotFoundState } from "./NotFoundState";

export interface PageStateProps extends BaseStateProps {
  state: PageStatus;
  children?: ReactNode;
  // Specific fallthrough props
  error?: Error | string | null;
  onRetry?: () => void;
  requiredRole?: string;
  onRequestAccess?: () => void;
  skeletonVariant?: "card" | "table-row" | "text" | "rectangular";
  skeletonCount?: number;
}

export const PageState: React.FC<PageStateProps> = ({
  state,
  children,
  skeletonVariant = "rectangular",
  skeletonCount = 3,
  ...props
}) => {
  switch (state) {
    case "loading":
      return <LoadingState {...props} />;
    case "skeleton":
      return (
        <div className="space-y-3 p-4">
          <Skeleton variant={skeletonVariant} count={skeletonCount} />
        </div>
      );
    case "empty":
      return <EmptyState {...props} />;
    case "error":
      return <ErrorState error={props.error} onRetry={props.onRetry} {...props} />;
    case "forbidden":
      return (
        <PermissionDenied
          requiredRole={props.requiredRole}
          onRequestAccess={props.onRequestAccess}
          {...props}
        />
      );
    case "not-found":
      return <NotFoundState {...props} />;
    case "success":
      return <SuccessState {...props} />;
    case "idle":
    default:
      return <>{children}</>;
  }
};
