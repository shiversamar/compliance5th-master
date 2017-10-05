import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrequestViewComponent } from './myrequest-view.component';

describe('MyrequestViewComponent', () => {
  let component: MyrequestViewComponent;
  let fixture: ComponentFixture<MyrequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
