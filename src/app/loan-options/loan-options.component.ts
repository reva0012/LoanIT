import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoanService } from './loan.service';
import { LoanRequest } from '../loan-request.type';
import { Bank } from './bank.model';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-loan-options',
  templateUrl: './loan-options.component.html',
  styleUrls: ['./loan-options.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoanOptionsComponent implements OnInit {

  loanProviders: Bank[] = [];
  isEligible: boolean = false;
  isApplied: boolean = false;


  constructor(private loanService: LoanService,private router: Router,private messageService: MessageService) {
  }
  
  ngOnInit(): void {
    this.messageService.clear();
    const loanRequest:LoanRequest = this.loanService.getLoanRequest();
    this.loanProviders = this.loanService.findLoanOptions(loanRequest.annualIncome,loanRequest.creditRating);
    if(this.loanProviders.length > 0){
      this.isEligible = true;
    }
  }

  goBackToEnquiryForm(){
    this.loanService.clearData();
    this.messageService.clear();
    this.router.navigateByUrl('loan-enquiry-form');
  }

  showModal(){
    let message = 'Thank you for your interest, Representative from the bank will contact you soon !!';
    this.messageService.add({severity:'success', summary:'Application successfull', detail:message});
  }


  


}
