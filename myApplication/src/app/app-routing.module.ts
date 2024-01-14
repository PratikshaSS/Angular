import { NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SubComponent } from './sub/sub.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { SignUpReactiveFormComponent } from './sign-up-reactive-form/sign-up-reactive-form.component';
import { Viewchild1Component } from './viewchild1/viewchild1.component';
import { Viewchild2Component } from './viewchild2/viewchild2.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'home', component : HomeComponent},
  { path : 'login', component : LoginComponent},
  { path : 'signUp', component : SignUpComponent},
  { path : 'dataBinding', component : DatabindingComponent},
  { path : 'directives', component : DirectivesComponent},
  { path : 'parent', component : ParentComponent},
  { path : 'child', component : ChildComponent},
  { path : 'lifecycleHooks', component : LifecyclehooksComponent},
  { path : 'subject' , component : SubComponent},
  { path : 'subject1' , component : Sub1Component},
  { path : 'subject2' , component : Sub2Component},
  { path : "templatedriven" , component : TemplatedrivenformComponent},
  { path : "signupForm" , component : SignUpReactiveFormComponent},
  { path : "Viewchild1" , component : Viewchild1Component},
  { path : "Viewchild2" , component : Viewchild2Component},
  { path : 'admin' , loadChildren : ()=>import('./admin/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
