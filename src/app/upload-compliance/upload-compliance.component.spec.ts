import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComplianceComponent } from './upload-compliance.component';

describe('UploadComplianceComponent', () => {
  let component: UploadComplianceComponent;
  let fixture: ComponentFixture<UploadComplianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadComplianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
