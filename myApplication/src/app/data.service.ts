import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, endWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userName : any;
  //static userName: string;

  data = new Subject<any>();

  url = "http://localhost:3000"

  constructor(private httpClient :HttpClient) { }

// getApiCall(endPoint:any){
//   return this.httpClient.get()
// }

postApiCall(endPoint:any, formData:any){
  let url=this.url + '/' +endPoint;
 return this.httpClient.post(url, formData)
}

getApiCall(urlEndPoint : string){
  let apiUrl = this.url + '/' + urlEndPoint + '/' + "bf94";
  return this.httpClient.get(apiUrl)

}
}

// Service : to declare global property , reusable functions logic