import React, { ReactNode } from "react";

export interface FilterOption {
  key: string;
  label: string;
  value: string;
  options: { label: string; value: string }[];
}

interface FilterBarProps {
  filters?: FilterOption[];
  onFilterChange?: (key: string, value: string) => void;
  onReset?: () => void;
  children?: ReactNode; // Slot for custom search inputs or extra buttons
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters = [],
  onFilterChange,
  onReset,
  children,
}) => (
  <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-3">
    <div className="flex flex-wrap items-center gap-2">
      {filters.map((filter) => (
        <select
          key={filter.key}
          value={filter.value}
          onChange={(e) => onFilterChange?.(filter.key, e.target.value)}
          aria-label={filter.label}
          className="rounded-md border border-slate-300 bg-white py-1.5 pl-2.5 pr-8 text-sm focus:border-blue-500 focus:outline-none"
        >
          <option value="">{filter.label} (All)</option>
          {filter.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ))}

      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-medium text-slate-500 hover:text-slate-800"
        >
          Reset Filters
        </button>
      )}
    </div>

    {children && <div className="flex items-center gap-2">{children}</div>}
  </div>
);