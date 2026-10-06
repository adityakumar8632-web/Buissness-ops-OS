import { NavigationItem, NavigationFilter } from './navigation.types';

class NavigationRegistry {
  private items = new Map<string, NavigationItem>();

  /**
   * Register a single navigation item or a hierarchy.
   * Throws in development if an ID collision occurs to catch conflicts early.
   */
  public register(item: NavigationItem): void {
    if (this.items.has(item.id)) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[NavigationRegistry] Overwriting item with duplicate ID: "${item.id}"`);
      }
    }
    this.items.set(item.id, item);
  }

  /**
   * Register multiple items at once (useful for module route bundles).
   */
  public registerBatch(items: NavigationItem[]): void {
    items.forEach((item) => this.register(item));
  }

  /**
   * Return all items flattened as an array.
   */
  public getAll(): NavigationItem[] {
    return Array.from(this.items.values());
  }

  /**
   * Returns items filtered by arbitrary predicates (e.g., Phase 2 permissions, feature flags).
   */
  public getVisibleItems(predicate?: NavigationFilter): NavigationItem[] {
    const list = this.getAll();
    if (!predicate) return list;
    return list.filter(predicate);
  }

  /**
   * Query contract for Phase 2:
   * "Does this navigation item require permission X?"
   */
  public getRequiredPermissions(itemId: string): string[] {
    const item = this.items.get(itemId);
    if (!item?.requiredPermission) return [];
    return Array.isArray(item.requiredPermission) 
      ? item.requiredPermission 
      : [item.requiredPermission];
  }
}

export const navigationRegistry = new NavigationRegistry();
