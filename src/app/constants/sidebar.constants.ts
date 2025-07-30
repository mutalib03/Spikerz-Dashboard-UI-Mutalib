import { LabelKey, NavigationItem } from "../models/sidebar.types";


export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'dashboard',
    translationKey: 'navigation.dashboard',
    icon: 'MENU.svg',
    route: '/dashboard',
    isActive: false
  },
  {
    id: 'alerts',
    translationKey: 'navigation.alerts',
    icon: 'MENU2.svg',
    route: '/alerts',
    isActive: false
  },
  {
    id: 'assets',
    translationKey: 'navigation.assets',
    icon: 'MENU3.svg',
    route: '/assets',
    isActive: false
  },
  {
    id: 'vulnerabilities',
    translationKey: 'navigation.vulnerabilities',
    icon: 'MENU4.svg',
    route: '/vulnerabilities',
    isActive: true
  },
  {
    id: 'remediation',
    translationKey: 'navigation.remediation',
    icon: 'MENU5.svg',
    route: '/remediation',
    isActive: false
  },
  {
    id: 'reports',
    translationKey: 'navigation.reports',
    icon: 'MENU6.svg',
    route: '/reports',
    isActive: false
  },
  {
    id: 'integrations',
    translationKey: 'navigation.integrations',
    icon: 'MENU11.svg',
    route: '/integrations',
    isActive: false
  }
];

export const BOTTOM_NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: 'settings',
    translationKey: 'navigation.settings',
    icon: 'MENU8.svg',
    route: '/settings',
    isActive: false
  },
  {
    id: 'help',
    translationKey: 'navigation.help',
    icon: 'MENU9.svg',
    route: '/help',
    isActive: false
  }
];

export const NAVIGATION_LABELS: Record<LabelKey, string> = {
  'navigation.main': 'Main navigation',
  'navigation.toggle': 'Toggle sidebar',
  'navigation.dashboard': 'Dashboard',
  'navigation.alerts': 'Alerts',
  'navigation.assets': 'Assets',
  'navigation.vulnerabilities': 'Vulnerabilities',
  'navigation.remediation': 'Remediation',
  'navigation.reports': 'Reports',
  'navigation.integrations': 'Integrations',
  'navigation.settings': 'Settings',
  'navigation.help': 'Help',
  'user.avatar': 'User avatar',
  'user.logout': 'Logout',
  'user.profile': 'User profile'
};

export const SIDEBAR_CONFIG = {
  WIDTH: 240,
  COLLAPSED_WIDTH: 10,
  TRANSITION_DURATION: 300,
  MOBILE_BREAKPOINT: 768,
  ITEM_HEIGHT: 48,
  PADDING: 16,
  BORDER_RADIUS: 8
} as const;