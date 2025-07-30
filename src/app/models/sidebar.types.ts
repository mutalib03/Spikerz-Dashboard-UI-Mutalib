export type NavigationItem = {
  id: string;
  translationKey: string;
  icon: string;
  route: string;
  isActive: boolean;
};

export type UserProfile = {
  name: string;
  role: string;
  avatar: string;
};

export type SidebarState = {
  isCollapsed: boolean;
  isMobileOpen: boolean;
};

export type NavigationEvent = {
  itemId: string;
  route: string;
};

export type LabelKey = 
  | 'navigation.main'
  | 'navigation.toggle'
  | 'navigation.dashboard'
  | 'navigation.alerts'
  | 'navigation.assets'
  | 'navigation.vulnerabilities'
  | 'navigation.remediation'
  | 'navigation.reports'
  | 'navigation.integrations'
  | 'navigation.settings'
  | 'navigation.help'
  | 'user.avatar'
  | 'user.logout'
  | 'user.profile';