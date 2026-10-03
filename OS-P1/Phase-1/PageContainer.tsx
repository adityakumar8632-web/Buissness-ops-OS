import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
  actions?: React.ReactNode;
}

export function PageContainer({ children, title, actions }: PageContainerProps) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 focus:outline-none"
    >
      {(title || actions) && (
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {title && <h1 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h1>}
          {actions && <div className="flex items-center space-x-3">{actions}</div>}
        </div>
      )}
      <div className="w-full overflow-x-hidden">{children}</div>
    </main>
  );
}