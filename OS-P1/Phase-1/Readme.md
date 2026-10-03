# BizOps OS Shell Architecture (Phase 1.1)

## Overview
The `AppShell` acts as the unified UI frame for all downstream Phase 3–11 modules. Domain modules never configure their own sidebars, global headers, or responsive drawers.

## Quickstart: Mounting a Module Page

Mount your module using either standard App Router nested layouts or the direct component slot:

### Method A: Next.js Root / Section Layout (`app/layout.tsx`)
Wrap the application slot once at the root:

```tsx
import { AppShell } from '@/components/shell/AppShell';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
```

### Method B: Page View Mount (app/crm/page.tsx)
Construct your domain view inside the standard PageContainer:

```tsx
import { PageContainer } from '@/components/shell/PageContainer';

export default function CRMPage() {
  return (
    <PageContainer actions="{<button" className="rounded bg-indigo-600 px-3 py-1.5 text-sm text-white" title="CRM Pipeline">Create Lead</button>}
    >
      {/* Module Content Mounts Here */}
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-slate-600">Active deal records will render here.</p>
      </section>
    </PageContainer>
  );
}
```
