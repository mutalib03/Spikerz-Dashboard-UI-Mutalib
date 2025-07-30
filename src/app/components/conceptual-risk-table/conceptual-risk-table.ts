import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RISK_LEVELS, CONTEXTUAL_RISK_LABELS } from '../../constants/contextual-risk.constants';
import { ContextualRiskData, RiskAsset } from '../../models/contextual-risk.types';

@Component({
  selector: 'app-conceptual-risk-table',
  imports: [CommonModule],
  templateUrl: './conceptual-risk-table.html',
  styleUrl: './conceptual-risk-table.scss'
})
export class ConceptualRiskTable {
  protected readonly RISK_LEVELS = RISK_LEVELS;
  
  private readonly allAssets: RiskAsset[] = [
    {
      id: 'asset-1',
      name: 'Web Server 01',
      ipAddress: '192.168.1.10',
      riskLevel: RISK_LEVELS.CRITICAL,
      icon: 'oad balancer.svg'
    },
    {
      id: 'asset-2',
      name: 'Database Server',
      ipAddress: '192.168.1.20',
      riskLevel: RISK_LEVELS.CRITICAL,
     icon: 'oad balancer.svg'
    },
    {
      id: 'asset-3',
      name: 'Load Balancer',
      ipAddress: '10.0.2.100',
      riskLevel: RISK_LEVELS.HIGH,
     icon: 'oad balancer.svg'
    },
    {
      id: 'asset-4',
      name: 'Application Server',
      ipAddress: '192.168.1.30',
      riskLevel: RISK_LEVELS.HIGH,
      icon: 'oad balancer.svg'
    },
    {
      id: 'asset-5',
      name: 'API Gateway',
      ipAddress: '10.0.1.50',
      riskLevel: RISK_LEVELS.MEDIUM,
     icon: 'oad balancer.svg'
    },
    {
      id: 'asset-6',
      name: 'Redis Cache',
      ipAddress: '192.168.1.40',
      riskLevel: RISK_LEVELS.MEDIUM,
      icon: 'oad balancer.svg'
    },
    {
      id: 'asset-7',
      name: 'File Storage',
      ipAddress: '192.168.1.50',
      riskLevel: RISK_LEVELS.LOW,
      icon: 'oad balancer.svg'
    },
    {
      id: 'asset-8',
      name: 'Monitoring Server',
      ipAddress: '10.0.3.10',
      riskLevel: RISK_LEVELS.LOW,
      icon: 'oad balancer.svg'
    }
  ];

  protected contextualRiskData: ContextualRiskData = {
    title: CONTEXTUAL_RISK_LABELS.TITLE,
    assets: [],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      totalItems: 0,
      itemsPerPage: 2,
      showingText: ''
    }
  };

  protected riskSummary = {
    total: 0,
    critical: 0,
    high: 0,
    medium: 0,
    low: 0
  };

  constructor() {
    this.calculateRiskSummary();
    this.updatePagination();
  }

  protected getTranslatedText(key: string, fallback: string): string {
    return fallback;
  }

  protected getRiskBadgeClass(riskLevel: string): string {
    return `contextual-risk__badge--${riskLevel.toLowerCase()}`;
  }

  protected getRiskLabelText(riskLevel: string): string {
    switch (riskLevel) {
      case RISK_LEVELS.CRITICAL:
        return this.getTranslatedText('risk.critical', 'Critical');
      case RISK_LEVELS.HIGH:
        return this.getTranslatedText('risk.high', 'High');
      case RISK_LEVELS.MEDIUM:
        return this.getTranslatedText('risk.medium', 'Medium');
      case RISK_LEVELS.LOW:
        return this.getTranslatedText('risk.low', 'Low');
      default:
        return riskLevel;
    }
  }

  protected trackByAssetId(index: number, asset: RiskAsset): string {
    return asset.id;
  }

  protected onPreviousPage(): void {
    if (this.contextualRiskData.pagination.currentPage > 1) {
      this.contextualRiskData.pagination.currentPage--;
      this.updatePagination();
    }
  }

  protected onNextPage(): void {
    if (this.contextualRiskData.pagination.currentPage < this.contextualRiskData.pagination.totalPages) {
      this.contextualRiskData.pagination.currentPage++;
      this.updatePagination();
    }
  }

  private calculateRiskSummary(): void {
    this.riskSummary = {
      total: this.allAssets.length,
      critical: this.allAssets.filter(asset => asset.riskLevel === RISK_LEVELS.CRITICAL).length,
      high: this.allAssets.filter(asset => asset.riskLevel === RISK_LEVELS.HIGH).length,
      medium: this.allAssets.filter(asset => asset.riskLevel === RISK_LEVELS.MEDIUM).length,
      low: this.allAssets.filter(asset => asset.riskLevel === RISK_LEVELS.LOW).length
    };
  }

  private updatePagination(): void {
    const { currentPage, itemsPerPage } = this.contextualRiskData.pagination;
    const totalItems = this.allAssets.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    
    this.contextualRiskData.assets = this.allAssets.slice(startIndex, endIndex);
    
    this.contextualRiskData.pagination = {
      ...this.contextualRiskData.pagination,
      totalPages,
      totalItems,
      showingText: `Showing ${startIndex + 1}-${endIndex} of ${totalItems}`
    };
  }

  protected getRiskPercentage(riskLevel: string): number {
    const count = this.getRiskCount(riskLevel);
    return this.riskSummary.total > 0 ? (count / this.riskSummary.total) * 100 : 0;
  }

  protected getRiskCount(riskLevel: string): number {
    switch (riskLevel) {
      case 'critical': return this.riskSummary.critical;
      case 'high': return this.riskSummary.high;
      case 'medium': return this.riskSummary.medium;
      case 'low': return this.riskSummary.low;
      default: return 0;
    }
  }

  protected getDashOffset(riskLevel: string): number {
    const circumference = 2 * Math.PI * 45; 
    const percentage = this.getRiskPercentage(riskLevel);
    return circumference - (percentage / 100) * circumference;
  }
}
