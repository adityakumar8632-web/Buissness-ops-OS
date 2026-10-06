# Downstream Usage Guide for Component Handlers
Interns 3, 4, and 5 must assemble primitives exclusively via token classes and CSS properties without injecting raw hex colors, pixel values, or arbitrary inline CSS.
## Building <Button/> (Module 1.3)
```
~Typescript~
// Using token classes directly mapped to our semantic variables:
export function Button({ variant = 'primary', children, disabled }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-sans font-medium text-sm rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "bg-[var(--color-interactive-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-interactive-primary-hover)] active:bg-[var(--color-interactive-primary-active)] disabled:bg-[var(--color-interactive-disabled)]",
    secondary: "bg-[var(--color-surface-base)] border border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:bg-[var(--color-surface-subtle)] active:bg-[var(--color-surface-sunken)] disabled:text-[var(--color-text-muted)]",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} h-9 px-4 py-2`} disabled={disabled}>
      {children}
    </button>
  );
}
```
## Building <Card/> (Module 1.4)
```
~Typescript~
export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[var(--color-surface-base)] border border-[var(--color-border-default)] rounded-lg shadow-sm p-6 text-[var(--color-text-primary)]">
      {children}
    </div>
  );
}
```
## Building <Input/> (Module 1.3)
```
~Typescript~
export function Input({ hasError, ...props }: InputProps) {
  return (
    <input
      className={`h-9 w-full rounded-md border bg-[var(--color-surface-base)] px-3 py-1.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-placeholder)] focus:outline-none focus:ring-2 transition-all ${
        hasError
          ? "border-[var(--color-status-danger)] focus:ring-[var(--color-status-danger)]"
          : "border-[var(--color-border-default)] focus:border-[var(--color-border-focus)] focus:ring-[var(--color-interactive-primary)]"
      } disabled:bg-[var(--color-surface-subtle)] disabled:text-[var(--color-text-muted)] disabled:cursor-not-allowed`}
      {...props}
    />
  );
}
```
## Building <Table/> (Module 1.4)
```
~Typescript~
export function Table({ headers, rows }: TableProps) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-[var(--color-border-default)]">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-[var(--color-surface-subtle)] border-b border-[var(--color-border-default)]">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-xs font-semibold text-[var(--color-text-secondary)] tracking-wide uppercase">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--color-border-subtle)] bg-[var(--color-surface-base)]">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-[var(--color-surface-subtle)] transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-[var(--color-text-primary)]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```
# Responsive Rule Contract
| Breakpoint | Target Device | Layout Behavior | Gutter Inset |
|---|---|---|
| < 640px | Phones (Demo viewport) | Single column; collapsable drawer; full-width buttons; hide non-critical table columns | 16px (spacing.4) |
| 640px - 767px | Large Phones / Small Tablets | 2-column KPI grids; responsive modal sheets | 16px (spacing.4) |
| 768px - 1023px | Portrait Tablets / Split Screen | Collapsed sidebar (icon rail 4.5rem); stacked detail drawers | 24px (spacing.6) |
| 1024px - 1279px | Standard Laptops | Persistent expanded sidebar (16rem); 3-column KPI layouts; full tables | 32px (spacing.8) |
| ≥ 1280px | Workstations / Showcase Monitors | Max-width containers (1440px); multi-panel operational views | 32px (spacing.8) |
