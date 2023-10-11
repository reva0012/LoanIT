import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanEnquiryFormComponent } from './loan-enquiry-form/loan-enquiry-form.component';
import { LoanOptionsComponent } from './loan-options/loan-options.component';

const routes: Routes = [
  {
    path: 'loan-enquiry-form', component: LoanEnquiryFormComponent
  },
  {
    path: 'loan-options', component: LoanOptionsComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'loan-enquiry-form'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
