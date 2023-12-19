import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  constructor(private dataSerice: DataService) { }

  // 1) Structural Directives

  // *ngIf : 
  // city = "Pune";
  // isShow = 34567;   //null/undefined/false >>>false

  // *ngFor :
  // cars = ['i20' , 'i10' , 'swift' , 'kia'];

  // showDiv = true;

  // toggle(){
  //   //this.showDiv = false;
  //   this.showDiv = !this.showDiv;
  // }

  // *ngSwitch
  // fruit = "mango";


  // 2) Attribute Directives

  // user : string = "Admin";
  //  user : string = "Mentor";
  // // user : string = "Student";

  // getData(){
  //   this.user = this.dataSerice.userName;
  //   console.log("Username :", this.user);
  // }

  searchText : any;
  tableHeading = ["Name", "Contact", "City", "Age"];
  tableData = [
    { name: "Pooja", contact: 9876543256, city: "Pune", age: "20" },
    { name: "Poonam", contact: 9876543256, city: "Karad", age: "20" },
    { name: "Pratiksha", contact: 9876543256, city: "Mumbai", age: "20" },
    { name: "Shiv", contact: 9876543256, city: "Satara", age: "20" },
    { name: "Raj", contact: 9876543256, city: "Sangli", age: "20" },
    { name: "Ram", contact: 9876543256, city: "Kolhapur", age: "20" },
    { name: "Om", contact: 9876543256, city: "Nashik", age: "20" },
    { name: "Shree", contact: 9876543256, city: "Pune", age: "20" },
    { name: "Shlok", contact: 9876543256, city: "Satara", age: "20" },
    { name: "Uma", contact: 9876543256, city: "Karad", age: "20" },
    { name: "Tej", contact: 9876543256, city: "Mumbai", age: "20" },
    { name: "Tanu", contact: 9876543256, city: "Nashik", age: "20" },
    { name: "Sonu", contact: 9876543256, city: "Sangli", age: "20" },

  ]

}

//directives are used to manipulate the DOM. By using Angular directives, 
//you can change the appearance, behavior or a layout of a DOM element
// 1.Component Directives
// 2.Structural Directives
// 3.Attribute Directives

// Component Directives: Component directives are used in main class. They contain the detail of how the component should be processed, 
// instantiated and used at runtime.

// Structural Directives: Structural directives start with a * sign. These directives are used to manipulate and change 
//the structure of the DOM elements. For example, *ngIf directive, *ngSwitch directive, and *ngFor directive.
// *ngIf Directive: The ngIf allows us to Add/Remove DOM Element.
// *ngSwitch Directive: The *ngSwitch allows us to Add/Remove DOM Element. It is similar to switch statement of C#.
// *ngFor Directive: The *ngFor directive is used to repeat a portion of HTML template once per each item from an iterable
// list (Collection).

// Attribute Directives: Attribute directives are used to change the look and behavior of the DOM elements. For example:
// ngClass directive, and ngStyle directive etc.

// ngClass Directive: The ngClass directive is used to add or remove CSS classes to an HTML element.
// ngStyle Directive: The ngStyle directive facilitates you to modify the style of an HTML element using the expression.
// You can also use ngStyle directive to dynamically change the style of your HTML element.

