import { Component } from '@angular/core';
import { ASSET_FLOW_LABELS } from '../../constants/asset-flow.constants';
import { AssetFlowData, AssetNode } from '../../models/asset-flow.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asset-flow',
  imports: [CommonModule],
  templateUrl: './asset-flow.html',
  styleUrl: './asset-flow.scss'
})
export class AssetFlow {

protected assetFlowData: AssetFlowData = {
    title: ASSET_FLOW_LABELS.TITLE,
   nodes: [
  {
    id: 'node-1',
    name: 'Internet Gateway',
    ipAddress: null,
    type: 'source',
    riskLevel: null,
    hasRiskBadge: false,
    icon: 'first.svg'
  },
  {
    id: 'node-2',
    name: 'Primary Load Balancer',
    ipAddress: '10.0.1.100',
    type: 'intermediate',
    riskLevel: null,
    hasRiskBadge: false,
    icon: 'oad balancer.svg'
  },
  {
    id: 'node-3',
    name: 'Application Load Balancer',
    ipAddress: '10.0.2.100',
    type: 'intermediate',
    riskLevel: null,
    hasRiskBadge: false,
    icon: 'oad balancer.svg'
  },
  {
    id: 'node-4',
    name: 'Web Server 01',
    ipAddress: '192.168.1.10',
    type: 'destination',
    riskLevel: 'critical',
    hasRiskBadge: true,
    icon: 'IconX.svg'
  },
  {
    id: 'node-5',
    name: 'Database Server',
    ipAddress: '192.168.1.20',
    type: 'destination',
    riskLevel: 'critical',
    hasRiskBadge: true,
    icon: 'IconX.svg'
  }
],
connections: [
  { from: 'node-1', to: 'node-2' },
  { from: 'node-2', to: 'node-3' },
  { from: 'node-3', to: 'node-4' },
  { from: 'node-3', to: 'node-5' }
]
  };

  protected getTranslatedText(key: string, fallback: string): string {
    return fallback;
  }

  protected getRiskBadgeClass(riskLevel: string | null): string {
    if (!riskLevel) return '';
    return `asset-flow__risk-badge--${riskLevel}`;
  }

  protected trackByNodeId(index: number, node: AssetNode): string {
    return node.id;
  }




}
