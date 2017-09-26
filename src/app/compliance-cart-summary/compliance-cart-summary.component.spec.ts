import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceCartSummaryComponent } from './compliance-cart-summary.component';

describe('ComplianceCartSummaryComponent', () => {
  let component: ComplianceCartSummaryComponent;
  let fixture: ComponentFixture<ComplianceCartSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceCartSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceCartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
