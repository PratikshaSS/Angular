import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appNumbersOnly]'
})

export class NumbersOnlyDirective {


  constructor(private element: ElementRef) { }
  @HostListener('input', ['$event'])
   onInputChange() {

    console.log("Directive Calling", this.element.nativeElement.value);
    
    let inputBoXdata = this.element.nativeElement.value;
    this.element.nativeElement.value = inputBoXdata.replace(/[^0-9]*/g, '')
  
  
  
  }
}

