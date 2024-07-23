import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificationFormComponent } from './verification-form/verification-form.component';

const routes: Routes = [
  { path: 'verification', component: VerificationFormComponent },
  // Other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
