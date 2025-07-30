export type AssetNodeType = 'source' | 'intermediate' | 'destination';
export type RiskLevel = 'critical' | 'high' | 'medium' | 'low';

export type AssetNode = {
  id: string;
  name: string;
  ipAddress: string | null;
  type: AssetNodeType;
  riskLevel: RiskLevel | null;
  hasRiskBadge: boolean;
  icon: string;
};

export type AssetConnection = {
  from: string;
  to: string;
};

export type AssetFlowData = {
  title: string;
  nodes: AssetNode[];
  connections: AssetConnection[];
};