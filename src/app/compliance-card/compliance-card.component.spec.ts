import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceCardComponent } from './compliance-card.component';

describe('ComplianceCardComponent', () => {
  let component: ComplianceCardComponent;
  let fixture: ComponentFixture<ComplianceCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
