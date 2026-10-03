import React, { ReactNode } from "react";
import { ColumnDef, SortState } from "./types";
import { Pagination } from "./Pagination";

interface DataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  keyField: keyof T;
  isLoading?: boolean;
  error?: string | null;
  emptyState?: ReactNode;
  sort?: SortState;
  onSort?: (sort: SortState) => void;
  selectedIds?: Set<string | number>;
  onSelectionChange?: (selectedIds: Set<string | number>) => void;
  pagination?: {
    page: number;
    pageSize: number;
    totalItems: number;
    onPageChange: (newPage: number) => void;
  };
}

export function DataTable<T extends Record<string, any>>({
  columns,
  data,
  keyField,
  isLoading = false,
  error = null,
  emptyState,
  sort,
  onSort,
  selectedIds,
  onSelectionChange,
  pagination,
}: DataTableProps<T>) {
  const isSelectable = !!onSelectionChange;
  const allSelected =
    data.length > 0 && data.every((row) => selectedIds?.has(row[keyField]));

  const handleSelectAll = () => {
    if (!onSelectionChange) return;
    if (allSelected) {
      onSelectionChange(new Set());
    } else {
      onSelectionChange(new Set(data.map((row) => row[keyField])));
    }
  };

  const handleSelectRow = (id: string | number) => {
    if (!onSelectionChange || !selectedIds) return;
    const next = new Set(selectedIds);
    next.has(id) ? next.delete(id) : next.add(id);
    onSelectionChange(next);
  };

  const handleSortClick = (key: string) => {
    if (!onSort) return;
    const nextDirection =
      sort?.column === key && sort.direction === "asc" ? "desc" : "asc";
    onSort({ column: key, direction: nextDirection });
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase text-slate-500">
            <tr>
              {isSelectable && (
                <th className="w-10 px-4 py-3">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={handleSelectAll}
                    className="rounded border-slate-300"
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  style={{ width: col.width }}
                  className={`px-4 py-3 ${
                    col.align === "right"
                      ? "text-right"
                      : col.align === "center"
                      ? "text-center"
                      : "text-left"
                  } ${col.sortable ? "cursor-pointer select-none" : ""}`}
                  onClick={() => col.sortable && handleSortClick(col.key)}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.header}
                    {col.sortable && (
                      <span className="text-slate-400">
                        {sort?.column === col.key
                          ? sort.direction === "asc"
                            ? "▲"
                            : "▼"
                          : "↕"}
                      </span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, rIdx) => (
                <tr key={rIdx} className="animate-pulse">
                  {isSelectable && <td className="px-4 py-3"><div className="h-4 w-4 rounded bg-slate-200" /></td>}
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3">
                      <div className="h-4 w-2/3 rounded bg-slate-200" />
                    </td>
                  ))}
                </tr>
              ))
            ) : error ? (
              <tr>
                <td
                  colSpan={columns.length + (isSelectable ? 1 : 0)}
                  className="px-4 py-8 text-center text-rose-600"
                >
                  {error}
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (isSelectable ? 1 : 0)}
                  className="px-4 py-8 text-center text-slate-400"
                >
                  {emptyState || "No records found."}
                </td>
              </tr>
            ) : (
              data.map((row, idx) => {
                const id = row[keyField];
                const isSelected = selectedIds?.has(id);
                return (
                  <tr
                    key={id}
                    className={`hover:bg-slate-50 transition-colors ${
                      isSelected ? "bg-blue-50/60" : ""
                    }`}
                  >
                    {isSelectable && (
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleSelectRow(id)}
                          className="rounded border-slate-300"
                        />
                      </td>
                    )}
                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={`px-4 py-3 ${
                          col.align === "right"
                            ? "text-right"
                            : col.align === "center"
                            ? "text-center"
                            : "text-left"
                        }`}
                      >
                        {col.render ? col.render(row, idx) : row[col.key]}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {pagination && <Pagination {...pagination} />}
    </div>
  );
}