import { Injectable } from '@angular/core';
import { LoanRequest } from '../loan-request.type';
import { Bank } from './bank.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoanService {
    private loanRequest: LoanRequest = {} as LoanRequest;
    private banks: Bank[] = [];

    constructor(private http: HttpClient) {
    }

    setLoanRequest(loanRequest: LoanRequest) {
        this.loanRequest = loanRequest;
    }

    getLoanRequest() {
        return this.loanRequest;
    }

    clearData() {
        this.loanRequest = {} as LoanRequest;
        this.banks = [];
    }

    getBanks() {
        return this.http.get('assets/mockData/loan-options.json').subscribe(
            (data: any) => {
                console.log(data);
                this.banks = data;
             } 
        );
    }

    findLoanOptions(income:number, creditRating:string){
        this.banks = this.filterByCreditRating(creditRating);
        return this.updateEligibleAmount(income);
    }

    private filterByCreditRating(creditRating: string) {
        return this.banks = this.banks.filter(bank => {
            return bank.rating === creditRating;
        });
    }

    updateEligibleAmount(income: number) {
        this.banks.map((item) => {
            return item.amount = income * item.mfactor * 4;
        });
        return this.banks;
    }

}