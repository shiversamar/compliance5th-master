import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceQuantityComponent } from './compliance-quantity.component';

describe('ComplianceQuantityComponent', () => {
  let component: ComplianceQuantityComponent;
  let fixture: ComponentFixture<ComplianceQuantityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceQuantityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
