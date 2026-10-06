# Verification: Acceptance Criteria Test
### Here is how an intern implements <CustomerTable data="{customers}"/> with sorting, status rendering, and pagination without changing a single line inside DataTable:
```
~Typescript~
import React, { useState } from "react";
import { DataTable } from "./DataTable";
import { StatusIndicator } from "./StatusIndicator";
import { ColumnDef, SortState } from "./types";

interface Customer {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive";
  spent: number;
}

const customerColumns: ColumnDef<Customer>[] = [
  { key: "name", header: "Customer Name", sortable: true },
  { key: "email", header: "Email Address" },
  {
    key: "status",
    header: "Status",
    render: (c) => (
      <StatusIndicator
        status={c.status === "active" ? "success" : "neutral"}
        label={c.status.toUpperCase()}
        size="sm"
      />
    ),
  },
  {
    key: "spent",
    header: "Total Spent",
    align: "right",
    render: (c) => `$${c.spent.toLocaleString()}`,
  },
];

export const CustomerTable: React.FC<{ data: Customer[]; isLoading?: boolean }> = ({
  data,
  isLoading,
}) => {
  const [sort, setSort] = useState<SortState>({ column: "name", direction: "asc" });

  return (
    <DataTable
      columns={customerColumns}
      data={data}
      keyField="id"
      sort={sort}
      onSort={setSort}
      isLoading={isLoading}
      emptyState="No customers found for this account."
    />
  );
};
```
