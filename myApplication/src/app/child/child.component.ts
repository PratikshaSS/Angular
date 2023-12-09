import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() cityName : any;  //parent-child

  @Output() data = new EventEmitter<any>
  state = 'Maharashtra';    //child-parent

  dataFromChild(){
    this.data.emit(this.state)
    
  }

}
