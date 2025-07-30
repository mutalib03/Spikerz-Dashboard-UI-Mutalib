import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskSummmary } from './risk-summmary';

describe('RiskSummmary', () => {
  let component: RiskSummmary;
  let fixture: ComponentFixture<RiskSummmary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskSummmary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskSummmary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
