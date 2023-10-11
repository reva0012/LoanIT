import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LoanRequest } from '../loan-request.type';
import { LoanService } from '../loan-options/loan.service';
import { MessageService } from 'primeng/api';

const NUMERIC_PATTERN = "^[0-9]*$";
@Component({
  selector: 'app-loan-enquiry-form',
  templateUrl: './loan-enquiry-form.component.html',
  styleUrls: ['./loan-enquiry-form.component.css'],
  providers: [MessageService]
})
export class LoanEnquiryFormComponent implements OnInit {
  loanEnquiryForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
    dob: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    pincode: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.pattern(NUMERIC_PATTERN),Validators.minLength(10),Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    employmentStatus: [''],
    annualIncome: [0, [Validators.required, Validators.pattern(NUMERIC_PATTERN)]],
    creditScore: ['', Validators.required],
  });

  formInvalid: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private loanService: LoanService,
    private messageService: MessageService) {
    this.loanService.getBanks();
  }

  ngOnInit(): void {
    this.loanService.clearData();
    this.messageService.clear();
  }

  getLoanOptions() {
    if (this.loanEnquiryForm.valid) {
      this.messageService.clear();
      let annualIncome = this.loanEnquiryForm.get('annualIncome')?.value;
      let creditRating = this.loanEnquiryForm.get('creditScore')?.value;
      let loanRequest: LoanRequest = {
        annualIncome: annualIncome,
        creditRating: creditRating
      } as LoanRequest;
      this.loanService.setLoanRequest(loanRequest);
      this.router.navigate(['loan-options']);
    } else {
      this.messageService.add({ severity: 'error', summary: 'Bad Input', detail: 'Please enter valid input for all fields' });
    }
  }

}
