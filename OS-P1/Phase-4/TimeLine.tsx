// Timeline.tsx
import React, { ReactNode } from "react";

export interface TimelineItem {
  id: string | number;
  title: ReactNode;
  timestamp: string;
  description?: ReactNode;
}

export const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => (
  <div className="relative border-l border-slate-200 pl-6 space-y-6">
    {items.map((item) => (
      <div key={item.id} className="relative">
        <span className="absolute -left-[31px] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-600 ring-2 ring-blue-100" />
        <div className="flex items-baseline justify-between gap-4">
          <h5 className="text-sm font-semibold text-slate-800">{item.title}</h5>
          <span className="text-xs text-slate-400">{item.timestamp}</span>
        </div>
        {item.description && (
          <div className="mt-1 text-xs text-slate-600">{item.description}</div>
        )}
      </div>
    ))}
  </div>
);

// ActivityFeed.tsx
export interface ActivityItem {
  id: string | number;
  user: { name: string; avatarUrl?: string };
  action: string;
  target?: string;
  timeAgo: string;
}

export const ActivityFeed: React.FC<{ activities: ActivityItem[] }> = ({ activities }) => (
  <ul className="divide-y divide-slate-100">
    {activities.map((act) => (
      <li key={act.id} className="flex items-center gap-3 py-3">
        {act.user.avatarUrl ? (
          <img src={act.user.avatarUrl} alt="" className="h-8 w-8 rounded-full object-cover" />
        ) : (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-600">
            {act.user.name.slice(0, 2).toUpperCase()}
          </div>
        )}
        <div className="flex-1 text-sm">
          <span className="font-semibold text-slate-800">{act.user.name}</span>{" "}
          <span className="text-slate-600">{act.action}</span>{" "}
          {act.target && <span className="font-medium text-slate-800">{act.target}</span>}
        </div>
        <span className="text-xs text-slate-400">{act.timeAgo}</span>
      </li>
    ))}
  </ul>
);