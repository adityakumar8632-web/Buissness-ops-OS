'use client';

import React, { useState, useCallback } from 'react';
import { Sidebar } from './Sidebar';
import { MobileNavigation } from './MobileNavigation';
import { Header } from './Header';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenMenu = useCallback(() => setMobileMenuOpen(true), []);
  const handleCloseMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-indigo-600 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      {/* Desktop Persistent Sidebar */}
      <Sidebar />

      {/* Mobile Drawer */}
      <MobileNavigation isOpen={mobileMenuOpen} onClose={handleCloseMenu} />

      {/* Main Execution Surface */}
      <div className="flex flex-1 flex-col md:pl-64 w-full min-w-0">
        <Header onOpenMobileMenu={handleOpenMenu} />
        {children}
      </div>
    </div>
  );
}