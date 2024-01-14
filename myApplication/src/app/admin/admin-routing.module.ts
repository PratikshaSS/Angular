import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { SignupComponent } from '../admin/signup/signup.component';

const routes: Routes = [
  {path : 'adminLanding', component : AdminLandingComponent},
  {path : 'adminSignUp' , component : SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
