export type RiskLevel = 'critical' | 'high' | 'medium' | 'low';

export type RiskAsset = {
  id: string;
  name: string;
  ipAddress: string;
  riskLevel: RiskLevel;
  icon: string;
};

export type PaginationData = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  showingText: string;
};

export type ContextualRiskData = {
  title: string;
  assets: RiskAsset[];
  pagination: PaginationData;
};

export type RiskSummary = {
  total: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
};