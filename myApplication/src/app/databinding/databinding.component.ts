import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  //DB : Data Binding >> Communication between component and DOM.
  // two types : 1) One-way DB    (Javatpoint)
  // i) String Interpolation >> {{}}  >> pass data from typescript to html/DOM
  // ii) Property Binding >> []
  // iii) Event Binding >> ()
  //2) Two-way DB >> ([])  >> ngModel directive

  //  = : assignment operator >> to assign value to the var/prop
  //  == : equality operator >> compares value only
  //  === : compares value as well as datatype 

data : any = "We are learning string interpolation";  //string interpolation
amount : number = 900000;
schoolName! : string;
isMatch = true;
x = 7;

name = "Pratiksha...";  //property binding

clickEventData : any;   //event binding

city : any = "Satara";   //Two way data binding

test(){
  return 50*2;
}

clickEvent(){
  this.clickEventData = "7484378";
}

}
