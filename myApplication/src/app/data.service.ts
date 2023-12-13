import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userName : any;
  //static userName: string;

  data = new Subject<any>();
  constructor() { }

}

// Service : to declare global property , reusable functions logic