import { Injectable } from '@angular/core';
import { baseURL } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http:HttpClient,
    ) { }

  createVendor(vendorData:any){
    return this.http.post(`${baseURL}/vendor/signup`, vendorData);
  }


}
