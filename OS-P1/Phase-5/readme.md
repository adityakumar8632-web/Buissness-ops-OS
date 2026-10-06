# Cross-Module Usage Examples
## CRM Example (Inline state switching)
```
<PageState 
  state={isLoading ? "loading" : isError ? "error" : customers.length === 0 ? "empty" : "idle"}
  error={queryError}
  onRetry={refetch}
  title="No customers yet"
  description="Create your first customer to get started."
  action={<button className="btn-primary">Add Customer</button>}
>
  <CustomerTable data={customers} />
</PageState>
```
## Sales Pipeline (Explicit Standalone Component)
```
<EmptyState
  title="No deals in this stage"
  description="Drag an active deal here or create a new quote."
  action={<button className="btn-primary">Create Deal</button>}
/>
```
## Workforce / HR (RBAC Barrier)
```
<PermissionDenied
  requiredRole="Payroll Administrator"
  onRequestAccess={() => openTicketSystem("workforce-payroll")}
/>
```
## Inventory (Missing SKU)
```
<NotFoundState
  title="SKU not found"
  description="The SKU item #89021 was archived or removed from warehouse logs."
  action={<button className="btn-secondary">Return to Warehouse Index</button>}
/>
```
## AI Training / Analytics (Success Confirmation)
```
<SuccessState
  title="Dataset sync completed"
  description="Vector embeddings have been generated for 142,000 document records."
  action={<button className="btn-primary">Inspect Indices</button>}
/>
```
