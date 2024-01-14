import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Viewchild2Component } from '../viewchild2/viewchild2.component';

@Component({
  selector: 'app-viewchild1',
  templateUrl: './viewchild1.component.html',
  styleUrls: ['./viewchild1.component.css']
})
export class Viewchild1Component {

  @ViewChild('city') cityName!: ElementRef
  @ViewChild(Viewchild2Component) viewCompo!: Viewchild2Component;
 
  @ViewChild('confirmation') confirm! : ElementRef
  constructor(private cdr : ChangeDetectorRef){ }

  name : any;
  edit = false;

  ngAfterViewInit() {
    console.log("City", this.cityName.nativeElement.innerHTML);
    this.cityName.nativeElement.innerHTML = "Pune";
    console.log("City", this.cityName.nativeElement.innerHTML);
    // console.log("Name",this.viewCompo.name);
    this.name = this.viewCompo.name
    this.viewCompo.city = "Nashik"
    if(this.edit){
      this.confirm.nativeElement.innerHTML = "Are you sure, you want to update this record"
    }
    this.cdr.detectChanges();

  }

}
