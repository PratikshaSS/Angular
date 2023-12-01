import { Component } from '@angular/core';
import { Router } from '@angular/router';   //import setction

@Component({    //component directive : meta data of component
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {    
  //component class : properties, constructors, life cycle hooks, methods etc
          //property setcion

  // let/var/const city = "pune";


  city : string = "pune"; //property >>>>declaration and definition
  sName : any = 463738;  // any datatypes
  name : string = "pratiksha";
  name2! : string;    //! for optional
  name3 : any;

  constructor(private router: Router){}   //constructor section

  //LH, methods
  signUpCompo(){

    this.name3 = "OmSai";
    console.log("City >>",this.city);
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
}
