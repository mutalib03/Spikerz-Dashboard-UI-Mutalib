import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remediation } from './remediation';

describe('Remediation', () => {
  let component: Remediation;
  let fixture: ComponentFixture<Remediation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Remediation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Remediation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
