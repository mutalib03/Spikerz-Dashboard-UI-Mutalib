export type RiskCount = {
  level: string;
  count: number;
  color: string;
  translationKey: string;
};

export type RiskSummaryData = {
  title: string;
  totalCount: number;
  criticalCount: number;
  riskCounts: RiskCount[];
};