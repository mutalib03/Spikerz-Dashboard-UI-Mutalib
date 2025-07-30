import { Component } from '@angular/core';
import { RiskCount, RiskSummaryData } from '../../models/risk-summary.types';
import { RISK_LEVELS } from '../../constants/contextual-risk.constants';
import { RISK_SUMMARY_LABELS } from '../../constants/risk-summary.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-risk-summary',
  imports: [ CommonModule],
  templateUrl: './risk-summmary.html',
  styleUrl: './risk-summmary.scss'
})
export class RiskSummmary {

 protected readonly RISK_LEVELS = RISK_LEVELS;
  
  protected riskSummaryData: RiskSummaryData = {
    title: RISK_SUMMARY_LABELS.TITLE,
    totalCount: 2,
    criticalCount: 2,
    riskCounts: [
      {
        level: RISK_LEVELS.CRITICAL,
        count: 2,
        color: '#DC2626', 
        translationKey: 'risk.critical'
      },
      {
        level: RISK_LEVELS.HIGH,
        count: 0,
        color: '#EA580C', 
        translationKey: 'risk.high'
      },
      {
        level: RISK_LEVELS.MEDIUM,
        count: 0,
        color: '#D97706', 
        translationKey: 'risk.medium'
      },
      {
        level: RISK_LEVELS.LOW,
        count: 0,
        color: '#16A34A', 
        translationKey: 'risk.low'
      }
    ]
  };

  protected getTranslatedText(key: string, fallback: string): string {
    return fallback;
  }

  protected getRiskLabelText(riskCount: RiskCount): string {
    return this.getTranslatedText(riskCount.translationKey, riskCount.level);
  }

  protected trackByRiskLevel(index: number, riskCount: RiskCount): string {
    return riskCount.level;
  }

  protected getDonutStrokeDasharray(): string {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    
    if (this.riskSummaryData.totalCount === 0) {
      return `0 ${circumference}`;
    }
    
  
    const criticalPercentage = this.riskSummaryData.criticalCount / this.riskSummaryData.totalCount;
    const criticalLength = circumference * criticalPercentage;
    const remainingLength = circumference - criticalLength;
    
    return `${criticalLength} ${remainingLength}`;
  }

  protected getDonutStrokeColor(): string {
   
    const criticalRisk = this.riskSummaryData.riskCounts.find(r => r.level === RISK_LEVELS.CRITICAL);
    return criticalRisk?.color || '#DC2626';
  }

}
