import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  //DB : Data Binding >> Communication between component and DOM.
  // two types : 1) One-way DB  2) Two-way DB >> ([])   (Javatpoint)
  // String Interpolation >> {{}}
  // Property Binding >> []
  // Event Binding >> ()

data : any = "We are learning string interpolation";  //string interpolation




}
