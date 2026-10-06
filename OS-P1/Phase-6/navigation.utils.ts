import { NavigationItem } from './navigation.types';

/**
 * Resolves whether a route is active based on configured strategy.
 */
export function isRouteActive(
  item: NavigationItem,
  currentPath: string
): boolean {
  const strategy = item.activeStrategy ?? 'prefix';

  switch (strategy) {
    case 'exact':
      return currentPath === item.path;
    case 'regex':
      return item.activeMatchPattern ? item.activeMatchPattern.test(currentPath) : false;
    case 'prefix':
    default:
      if (item.path === '/') return currentPath === '/';
      return currentPath.startsWith(item.path);
  }
}

/**
 * Extracts and sorts items flagged specifically for mobile bottom navigation.
 */
export function getMobileBottomNavItems(items: NavigationItem[]): NavigationItem[] {
  return items
    .filter((item) => item.mobile?.showInBottomNav)
    .sort((a, b) => (a.mobile?.bottomNavOrder ?? 99) - (b.mobile?.bottomNavOrder ?? 99));
}

/**
 * Groups items into desktop sidebar sections, sorted by item order.
 */
export function groupItemsBySection(
  items: NavigationItem[]
): Record<string, NavigationItem[]> {
  const grouped: Record<string, NavigationItem[]> = {};

  items
    .slice()
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    .forEach((item) => {
      if (!grouped[item.section]) {
        grouped[item.section] = [];
      }
      grouped[item.section].push(item);
    });

  return grouped;
}
