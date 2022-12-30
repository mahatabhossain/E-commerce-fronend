import { Injectable } from '@angular/core';
import { baseURL } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetvendorService {
  response:any;

  constructor(
    private http:HttpClient,
  ) { }

  getVendorData(){
    this.response = this.http.get(`${baseURL}/get/vendor`);
    return this.response;
  }
}
