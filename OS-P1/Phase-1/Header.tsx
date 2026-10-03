'use client';

import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

interface HeaderProps {
  onOpenMobileMenu: () => void;
}

export function Header({ onOpenMobileMenu }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur transition-all sm:px-6">
      <div className="flex items-center space-x-3">
        {/* Mobile menu trigger button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={onOpenMobileMenu}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 md:hidden"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden sm:block">
          <Breadcrumbs />
        </div>
      </div>

      {/* Header Utilities Slot: Org indicator & Profile placeholder */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2">
          <span className="hidden sm:inline-block rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
            Operations Demo
          </span>
          <div
            tabIndex={0}
            role="button"
            aria-label="User profile options"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            OS
          </div>
        </div>
      </div>
    </header>
  );
}