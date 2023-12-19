import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, searchText: any): any {
    console.log("Pipe calling");
    
    //return null;

    let text = searchText?.toLowerCase();
    console.log(text);

    return data.filter((ele:any) => {
      return  JSON.stringify(ele).toLowerCase().includes(text)

    })
    
  }

}



//Angular Pipes are a way to transform the format of 
  //  output data for display. The data can be strings,
  // currency amounts, dates, etc. Pipes are simple 
  //  functions that accept an input and return a transformed value 

// A pure change is when the change detection cycle 
  //  detects a change to either a primitive input value
  //  (such as String, Number, Boolean, or Symbol) 
  //  or object reference (such as Date, Array, Function, 
  //  or Object).