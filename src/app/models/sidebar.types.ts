
export type UserProfile = {
  name: string;
  role: string;
  avatar: string;
};

export type NavigationItem = {
  id: string;
  translationKey: string;
  icon: string;
  route: string;
  isActive: boolean;
};

export type LabelKey = 
  | 'navigation.main'
  | 'navigation.toggle'
  | 'navigation.dashboard'
  | 'navigation.alerts'
  | 'navigation.assets'
  | 'navigation.reports'
  | 'navigation.analytics'
  | 'navigation.monitoring'
  | 'navigation.compliance'
  | 'navigation.settings'
  | 'navigation.help'
  | 'user.avatar'
  | 'user.logout';

export type SidebarState = {
  isCollapsed: boolean;
  isMobile: boolean;
  isMobileSidebarOpen: boolean;
};

export type SidebarConfig = {
  readonly WIDTH: number;
  readonly COLLAPSED_WIDTH: number;
  readonly MOBILE_BREAKPOINT: number;
  readonly ANIMATION_DURATION: number;
};