import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AssetFlow } from '../asset-flow/asset-flow';
import { ConceptualRiskTable } from '../conceptual-risk-table/conceptual-risk-table';

@Component({
  selector: 'app-right-panel',
  imports: [
    CommonModule,
    AssetFlow,
    ConceptualRiskTable,
  ],
  templateUrl: './right-panel.html',
  styleUrl: './right-panel.scss'
})
export class RightPanel {

}
