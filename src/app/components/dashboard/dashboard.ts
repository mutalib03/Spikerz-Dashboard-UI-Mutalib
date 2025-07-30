import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InfoPanel} from '../info-panel/info-panel';
import { InfoPanelData } from '../../models/info-panel.types';
import { RightPanel } from '../right-panel/right-panel';

@Component({
  selector: 'app-dashboard',
imports: [CommonModule, InfoPanel,RightPanel],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  protected infoPanelData: InfoPanelData = {
  description: {
    title: 'Description',
    content: 'This asset represents the primary web server infrastructure hosting our main application. It handles all user requests and connects to the database layer for data processing. The server is configured with high availability and automatic failover capabilities.',
    translationKey: 'asset.description'
  },
  metadata: {
    title: 'Extra',
    content: 'This server operates within a containerized environment using Docker orchestration. SSL/TLS encryption is enforced across all communications with automatic certificate renewal via Let\'s Encrypt. The system implements comprehensive logging through ELK stack integration and maintains real-time performance metrics. Security scanning is performed daily with automated vulnerability assessments. Load balancing is configured across three availability zones with health checks every 30 seconds.',
    translationKey: 'asset.metadata',
    items: [
      { key: 'Date Created', value: new Date('2017-10-19'), type: 'date' },
      { key: 'Current Status', value: 'Active', type: 'status' },
      { key: 'System Owner', value: 'DevOps Team', type: 'text' },
      { key: 'SSL Certificate Valid', value: true, type: 'boolean' },
      { key: 'Geographic Region', value: 'US-East-1', type: 'text' },
      { key: 'Asset Category', value: 'Web Infrastructure', type: 'text' },
      { key: 'Environment Type', value: 'Production', type: 'text' },
      { key: 'Compliance Status', value: 'SOC 2 Certified', type: 'text' }
    ]
  }
  }
  constructor() {
   
  }

  private loadAssetData(): void {
   
  }


}
