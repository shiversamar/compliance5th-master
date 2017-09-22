import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceCartComponent } from './compliance-cart.component';

describe('ComplianceCartComponent', () => {
  let component: ComplianceCartComponent;
  let fixture: ComponentFixture<ComplianceCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplianceCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
