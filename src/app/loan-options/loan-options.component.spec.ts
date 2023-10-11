import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOptionsComponent } from './loan-options.component';

describe('LoanOptionsComponent', () => {
  let component: LoanOptionsComponent;
  let fixture: ComponentFixture<LoanOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
