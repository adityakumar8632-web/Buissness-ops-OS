import { navigationRegistry } from '@/core/navigation';

navigationRegistry.register({
  id: 'inventory',
  label: 'Inventory',
  path: '/inventory',
  section: 'operations',
  order: 20,
  requiredPermission: 'inventory.read',
  activeStrategy: 'prefix',
  mobile: {
    showInBottomNav: false,
    drawerGroup: 'primary'
  }
});
