import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEnquiryFormComponent } from './loan-enquiry-form.component';

describe('LoanEnquiryFormComponent', () => {
  let component: LoanEnquiryFormComponent;
  let fixture: ComponentFixture<LoanEnquiryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanEnquiryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanEnquiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
