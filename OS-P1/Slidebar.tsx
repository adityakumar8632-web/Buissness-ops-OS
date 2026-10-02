'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PLACEHOLDER_NAV_ITEMS } from './nav-config';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      aria-label="Sidebar Navigation"
      className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-30 border-r border-slate-200 bg-slate-900 text-slate-300"
    >
      {/* Brand Header */}
      <div className="flex h-16 items-center px-6 border-b border-slate-800">
        <span className="text-base font-bold tracking-tight text-white">BizOps OS</span>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {PLACEHOLDER_NAV_ITEMS.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer system contract version */}
      <div className="p-4 border-t border-slate-800 text-[11px] text-slate-300">
        Phase 1.1 Application Shell
      </div>
    </aside>
  );
}