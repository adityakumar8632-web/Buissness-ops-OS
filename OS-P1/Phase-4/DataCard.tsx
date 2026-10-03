// DataCard.tsx
import React, { ReactNode } from "react";

interface DataCardProps {
  title?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const DataCard: React.FC<DataCardProps> = ({
  title,
  actions,
  children,
  className = "",
}) => (
  <div className={`rounded-lg border border-slate-200 bg-white p-4 shadow-sm ${className}`}>
    {(title || actions) && (
      <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
        {title && <h3 className="font-semibold text-slate-800">{title}</h3>}
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
    )}
    {children}
  </div>
);

// KpiCard.tsx
interface KpiCardProps {
  label: string;
  value: string | number;
  trend?: {
    value: string | number;
    direction: "up" | "down" | "flat";
  };
  secondaryText?: string;
  icon?: ReactNode;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  label,
  value,
  trend,
  secondaryText,
  icon,
}) => (
  <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
    <div className="flex items-center justify-between text-slate-500">
      <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
      {icon && <span className="text-slate-400">{icon}</span>}
    </div>
    <div className="mt-2 text-2xl font-bold text-slate-900">{value}</div>
    {(trend || secondaryText) && (
      <div className="mt-2 flex items-center gap-2 text-xs">
        {trend && (
          <span
            className={`font-semibold ${
              trend.direction === "up"
                ? "text-emerald-600"
                : trend.direction === "down"
                ? "text-rose-600"
                : "text-slate-500"
            }`}
          >
            {trend.direction === "up" ? "↑" : trend.direction === "down" ? "↓" : "→"}{" "}
            {trend.value}
          </span>
        )}
        {secondaryText && <span className="text-slate-500">{secondaryText}</span>}
      </div>
    )}
  </div>
);

// ChartContainer.tsx
interface ChartContainerProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode; // Plugs in Recharts, Chart.js, Visx, etc.
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  subtitle,
  actions,
  children,
}) => (
  <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
    <div className="mb-4 flex items-start justify-between">
      <div>
        <h4 className="font-semibold text-slate-800">{title}</h4>
        {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
      </div>
      {actions && <div>{actions}</div>}
    </div>
    <div className="w-full">{children}</div>
  </div>
);