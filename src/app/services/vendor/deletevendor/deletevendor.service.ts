import { Injectable } from '@angular/core';
import { baseURL } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeletevendorService {

  constructor(private http:HttpClient) { }

  deleteVendorData(vendorId:any){
    return this.http.delete(`${baseURL}/delete/vendor/${vendorId}`)
  }
}
