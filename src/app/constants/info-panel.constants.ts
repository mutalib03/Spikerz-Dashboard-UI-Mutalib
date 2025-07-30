export const INFO_PANEL_TRANSLATION_KEYS = {
  DESCRIPTION: 'panel.description',
  METADATA: 'panel.metadata',
  DATE: 'panel.date',
  STATUS: 'panel.status',
  OWNER: 'panel.owner',
  ENVIRONMENT: 'panel.environment',
  VERIFIED: 'panel.verified',
  LOCATION: 'panel.location',
  CATEGORY: 'panel.category',
  MONITORING_ACTIVE: 'panel.monitoringActive',
  BACKUP_ENABLED: 'panel.backupEnabled',
  LAST_UPDATED: 'panel.lastUpdated',
  DATE_CREATED: 'panel.dateCreated'
} as const;


export const DEFAULT_METADATA_STRUCTURE = {
  BASIC_INFO: [
    'DATE_CREATED',
    'STATUS', 
    'OWNER',
    'ENVIRONMENT'
  ],
  TECHNICAL_INFO: [
    'MONITORING_ACTIVE',
    'BACKUP_ENABLED', 
    'LOCATION',
    'CATEGORY'
  ],
  TIMESTAMPS: [
    'LAST_UPDATED',
    'DATE_CREATED'
  ]
} as const;


export const METADATA_VALUE_TYPES = {
  TEXT: 'text',
  DATE: 'date', 
  BOOLEAN: 'boolean',
  STATUS: 'status'
} as const;


export const INFO_PANEL_CSS_CLASSES = {
  BASE: 'info-panel',
  SECTION: 'info-panel__section',
  TITLE: 'info-panel__title', 
  DESCRIPTION: 'info-panel__description',
  METADATA: 'info-panel__metadata',
  METADATA_LIST: 'info-panel__metadata-list',
  METADATA_ITEM: 'info-panel__metadata-item',
  METADATA_KEY: 'info-panel__metadata-key',
  METADATA_VALUE: 'info-panel__metadata-value',
  CHECKMARK: 'info-panel__checkmark',
  VALUE_TEXT: 'info-panel__value-text'
} as const;