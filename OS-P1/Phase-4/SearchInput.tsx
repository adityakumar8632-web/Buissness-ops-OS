// SearchInput.tsx
import React, { ChangeEvent } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}) => (
  <div className={`relative flex items-center ${className}`}>
    <span className="absolute left-3 text-slate-400">🔍</span>
    <input
      type="text"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-md border border-slate-300 py-1.5 pl-9 pr-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  </div>
);

// StatusIndicator.tsx
interface StatusIndicatorProps {
  status: "success" | "warning" | "error" | "info" | "neutral";
  label?: string;
  size?: "sm" | "md";
}

const statusColorMap = {
  success: "bg-emerald-500 text-emerald-800 bg-emerald-50 border-emerald-200",
  warning: "bg-amber-500 text-amber-800 bg-amber-50 border-amber-200",
  error: "bg-rose-500 text-rose-800 bg-rose-50 border-rose-200",
  info: "bg-sky-500 text-sky-800 bg-sky-50 border-sky-200",
  neutral: "bg-slate-400 text-slate-700 bg-slate-50 border-slate-200",
};

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  label,
  size = "md",
}) => {
  const badgeClasses = statusColorMap[status] || statusColorMap.neutral;
  const dotColor = badgeClasses.split(" ")[0];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-medium ${badgeClasses} ${
        size === "sm" ? "text-xs" : "text-sm"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />
      {label && <span>{label}</span>}
    </span>
  );
};

// Pagination.tsx
interface PaginationProps {
  page: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  pageSize,
  totalItems,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const start = Math.min((page - 1) * pageSize + 1, totalItems);
  const end = Math.min(page * pageSize, totalItems);

  return (
    <div className="flex items-center justify-between border-t border-slate-200 px-4 py-3 text-sm text-slate-600">
      <div>
        Showing <span className="font-semibold">{start}</span> to{" "}
        <span className="font-semibold">{end}</span> of{" "}
        <span className="font-semibold">{totalItems}</span> results
      </div>
      <div className="flex gap-1">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className="rounded border border-slate-300 px-3 py-1 hover:bg-slate-50 disabled:opacity-40"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          className="rounded border border-slate-300 px-3 py-1 hover:bg-slate-50 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};