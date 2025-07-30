import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptualRiskTable } from './conceptual-risk-table';

describe('ConceptualRiskTable', () => {
  let component: ConceptualRiskTable;
  let fixture: ComponentFixture<ConceptualRiskTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceptualRiskTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptualRiskTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
