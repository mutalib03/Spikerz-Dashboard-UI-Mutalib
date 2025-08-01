

export const SIDEBAR_CONFIG = {
  WIDTH: 200,
  COLLAPSED_WIDTH: 60,
  MOBILE_BREAKPOINT: 768,
  ANIMATION_DURATION: 300
} as const;


export const NAVIGATION_ITEMS_TEMPLATE = [
  {
    id: 'dashboard',
    translationKey: 'navigation.dashboard',
    icon: 'MENU.svg',
    route: '/dashboard'
  },
  {
    id: 'alerts',
    translationKey: 'navigation.alerts', 
    icon: 'MENU2.svg',
    route: '/alerts'
  },
  {
    id: 'assets',
    translationKey: 'navigation.assets',
    icon: 'MENU3.svg', 
    route: '/assets'
  },
  {
    id: 'reports',
    translationKey: 'navigation.reports',
    icon: 'MENU11.svg',
    route: '/reports'
  },
  {
    id: 'analytics',
    translationKey: 'navigation.analytics',
    icon: 'MENU5.svg',
    route: '/analytics'
  },
  {
    id: 'monitoring',
    translationKey: 'navigation.monitoring',
    icon: 'MENU6.svg',
    route: '/monitoring'
  },
  {
    id: 'compliance',
    translationKey: 'navigation.compliance',
    icon: 'MENU8.svg',
    route: '/compliance'
  }
] as const;

export const BOTTOM_NAVIGATION_ITEMS_TEMPLATE = [
  {
    id: 'settings',
    translationKey: 'navigation.settings',
    icon: 'MENU8.svg',
    route: '/settings'
  },
  {
    id: 'help',
    translationKey: 'navigation.help',
    icon: 'MENU9.svg', 
    route: '/help'
  }
] as const;


export const DEFAULT_ACTIVE_ITEM = 'reports' as const;


export const NAVIGATION_ITEMS = NAVIGATION_ITEMS_TEMPLATE;
export const BOTTOM_NAVIGATION_ITEMS = BOTTOM_NAVIGATION_ITEMS_TEMPLATE;


export const NAVIGATION_LABELS = {
  
  'navigation.main': 'Main Navigation',
  'navigation.toggle': 'Toggle Sidebar',
  'navigation.dashboard': 'Lorem', // Exact from Figma
  'navigation.alerts': 'Lorem',    // Exact from Figma
  'navigation.assets': 'Lorem',    // Exact from Figma  
  'navigation.reports': 'Lorem',   // Exact from Figma
  'navigation.analytics': 'Lorem', // Exact from Figma
  'navigation.monitoring': 'Lorem', // Exact from Figma
  'navigation.compliance': 'Lorem', // Exact from Figma
  
  // Bottom navigation
  'navigation.settings': 'Lorem', // Exact from Figma
  'navigation.help': 'Lorem',     // Exact from Figma
  
  // User profile
  'user.avatar': 'User Avatar',
  'user.logout': 'Logout'
} as const;

// Type definitions following coding standards
export type NavigationItemId = typeof NAVIGATION_ITEMS[number]['id'] | typeof BOTTOM_NAVIGATION_ITEMS[number]['id'];
export type LabelKey = keyof typeof NAVIGATION_LABELS;