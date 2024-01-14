import { Component } from '@angular/core';
import { Router } from '@angular/router';   //import setction
import { DataService } from '../data.service';

@Component({    //component directive : meta data of component
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //component class : properties, constructors, life cycle hooks, methods etc
  //property setcion

  // let/var/const city = "pune";


  city: string = "pune"; //property >>>>declaration and definition
  sName: any = 463738;  // any datatypes
  name: string = "pratiksha shinde";
  name2!: string;    //! for optional
  name3: any;
  pipes : boolean = false;
  date = new Date();

  constructor(private router: Router, private dataService: DataService) { }   //constructor section

  ngOnInit(){
  this.dataService.userName = this.name;

   console.log("set", this.dataService.userName);
  
}
//LH, methods
signUpCompo(){

  this.name3 = "OmSai";
  console.log("City >>", this.city);
  console.log("sign up component function calling");
  this.test();
  this.router.navigateByUrl("signUp");
}

test(){
  console.log("test calling....");

}

directives(){
  this.router.navigateByUrl("directives");
}

purePipes(){
  this.pipes=true;
}

adminSignUp(){
  this.router.navigateByUrl('admin/adminSignUp')
}
}
