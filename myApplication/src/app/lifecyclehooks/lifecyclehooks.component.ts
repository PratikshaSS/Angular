import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent {

  name : any; //normal prop
  @Input() surName : any; //input prop
  
  constructor(private dataService : DataService) {
    console.log("Constructor calling..");

  }

  // A component intsnace has a life cycle that starts when angular
      // instantiates the component class and renders the component view and its child views.

  // ngOnChanges()  : if component having @input bound properties then this gets triggered first
  // ngOnInit()
  // ngDoCheck()
  // ngAfterContentInit()
  // ngOnDestroy()
  // ngAfterContentChecked()
  // ngAfterViewInit()
  // ngAfterViewChecked()

  ngOnChanges(){
    console.log("ngOnChanges calling");
  }

  ngOnInit(){
    this.name = this.dataService.userName ;
    console.log("ngOnInit calling");
  }

  ngDoCheck(){
    console.log("ngDoCheck calling");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit calling");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked calling"); 
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit calling");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked calling");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy calling");
    
  }


}
