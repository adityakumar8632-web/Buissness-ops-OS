export interface NavItem {
  label: string;
  href: string;
  iconName: 'dashboard' | 'crm' | 'sales' | 'inventory' | 'tasks' | 'finance' | 'settings';
}

export const PLACEHOLDER_NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', iconName: 'dashboard' },
  { label: 'CRM', href: '/crm', iconName: 'crm' },
  { label: 'Sales', href: '/sales', iconName: 'sales' },
  { label: 'Inventory', href: '/inventory', iconName: 'inventory' },
  { label: 'Tasks', href: '/tasks', iconName: 'tasks' },
  { label: 'Finance', href: '/finance', iconName: 'finance' },
  { label: 'Settings', href: '/settings', iconName: 'settings' },
];