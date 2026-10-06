import { ReactNode } from "react";

export type PageStatus =
  | "idle"
  | "loading"
  | "skeleton"
  | "empty"
  | "error"
  | "forbidden"
  | "not-found"
  | "success";

export interface BaseStateProps {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  secondaryAction?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "fullscreen";
}

export interface ErrorStateProps extends BaseStateProps {
  error?: Error | string | null;
  onRetry?: () => void;
  retryText?: string;
  errorCode?: string | number;
}

export interface PermissionDeniedProps extends BaseStateProps {
  requiredRole?: string;
  onRequestAccess?: () => void;
}

export interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "card" | "table-row";
  count?: number;
  width?: string | number;
  height?: string | number;
}
