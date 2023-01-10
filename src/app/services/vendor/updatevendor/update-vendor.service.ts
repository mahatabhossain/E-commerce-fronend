import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateVendorService {

  constructor(
    private http: HttpClient,
  ) { }

  updateVendorData(vendorId:any, body:any){
    console.log("Body",body)
    return this.http.patch(`${baseURL}/update/vendor/${vendorId}`, body)
  }
}
