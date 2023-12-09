import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userName : any;
  static userName: string;
  constructor() { }
}

// Service : to declare global property , reusable functions logic