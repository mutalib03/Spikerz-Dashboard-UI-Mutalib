
export const CONTEXTUAL_RISK_LABELS = {
  TITLE: 'contextual.risk.title',
  ASSETS: 'contextual.risk.assets',
  TABLE_ASSET: 'table.asset',
  TABLE_RISK: 'table.contextual.risk',
  PAGINATION_PREVIOUS: 'pagination.previous',
  PAGINATION_NEXT: 'pagination.next',
  PAGINATION_SHOWING: 'pagination.showing'
} as const;

export const RISK_COLORS = {
  CRITICAL: '#dc2626',
  HIGH: '#ea580c',
  MEDIUM: '#d97706',
  LOW: '#16a34a'
} as const;

export const PAGINATION_CONFIG = {
  DEFAULT_ITEMS_PER_PAGE: 3,
  MAX_ITEMS_PER_PAGE: 10
} as const;

export const RISK_LEVELS = {
  CRITICAL: 'critical',
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
} as const;