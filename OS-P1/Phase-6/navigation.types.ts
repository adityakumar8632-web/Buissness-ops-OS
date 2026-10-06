import { ComponentType, SVGProps } from 'react';

export type PermissionKey = string;

export type NavigationSection = 
  | 'core' 
  | 'operations' 
  | 'management' 
  | 'insights' 
  | 'system';

export type ActiveMatchStrategy = 'exact' | 'prefix' | 'regex';

export interface MobileNavigationConfig {
  /** Should this item appear in the primary bottom navigation bar? */
  showInBottomNav?: boolean;
  /** Explicit order/priority in bottom nav (e.g., 1 to 5) */
  bottomNavOrder?: number;
  /** Group inside mobile overflow/drawer if not in bottom bar */
  drawerGroup?: 'primary' | 'secondary' | 'account';
}

export interface NavigationItem {
  /** Unique stable key across the entire application */
  id: string;
  /** Display label or i18n translation key */
  label: string;
  /** Route path to navigate to */
  path: string;
  /** Section bucket for grouping in desktop/drawer navigation */
  section: NavigationSection;
  /** Optional icon component */
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  
  /** 
   * Declarative permission contract. 
   * String key or predicate-ready tokens (evaluated by Phase 2 auth guard).
   */
  requiredPermission?: PermissionKey | PermissionKey[];

  /** Active-state resolution behavior */
  activeStrategy?: ActiveMatchStrategy;
  /** Optional custom regex if activeStrategy is 'regex' */
  activeMatchPattern?: RegExp;

  /** Mobile layout hints */
  mobile?: MobileNavigationConfig;

  /** Numerical order within the given section */
  order?: number;
  /** Nested navigation items */
  children?: NavigationItem[];
  /** Optional badge indicator key or static counter (e.g., 'unreadCount') */
  badgeKey?: string;
  /** Disabled state metadata */
  disabled?: boolean;
}

export type NavigationFilter = (item: NavigationItem) => boolean;
