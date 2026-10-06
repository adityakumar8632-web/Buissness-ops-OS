// features/dashboard/nav.ts
import { navigationRegistry } from '@/core/navigation';

navigationRegistry.register({
  id: 'dashboard',
  label: 'Dashboard',
  path: '/dashboard',
  section: 'core',
  order: 1,
  activeStrategy: 'exact',
  mobile: {
    showInBottomNav: true,
    bottomNavOrder: 1
  }
});
