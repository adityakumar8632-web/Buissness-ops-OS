import { useMemo } from 'react';
import { 
  navigationRegistry, 
  groupItemsBySection, 
  getMobileBottomNavItems 
} from '@/core/navigation';

interface UseNavigationOptions {
  /** 
   * Injected authorization evaluator (Phase 2).
   * If omitted, all items render by default.
   */
  hasPermission?: (permission: string) => boolean;
}

export function useNavigation({ hasPermission }: UseNavigationOptions = {}) {
  const visibleItems = useMemo(() => {
    return navigationRegistry.getVisibleItems((item) => {
      if (!item.requiredPermission || !hasPermission) return true;
      const perms = Array.isArray(item.requiredPermission) 
        ? item.requiredPermission 
        : [item.requiredPermission];
      return perms.every(hasPermission);
    });
  }, [hasPermission]);

  const sections = useMemo(() => groupItemsBySection(visibleItems), [visibleItems]);
  const bottomNavItems = useMemo(() => getMobileBottomNavItems(visibleItems), [visibleItems]);

  return {
    sections,
    bottomNavItems,
    allItems: visibleItems
  };
}
