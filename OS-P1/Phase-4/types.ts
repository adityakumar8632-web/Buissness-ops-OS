import { ReactNode } from "react";

export type SortDirection = "asc" | "desc";

export interface SortState {
  column: string;
  direction: SortDirection;
}

export interface ColumnDef<T> {
  key: string;
  header: ReactNode;
  render?: (row: T, index: number) => ReactNode;
  sortable?: boolean;
  align?: "left" | "center" | "right";
  width?: string;
}

export interface PaginationState {
  page: number;
  pageSize: number;
  totalItems: number;
}