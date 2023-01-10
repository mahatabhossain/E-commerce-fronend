import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(
    private http: HttpClient,
    ) { }

    vendorSignIn(signInData:any){
     return this.http.post(`${baseURL}/vendor/signin`,signInData);
    }

    isVendorSignIn(){
      let email = localStorage.getItem('vendorEmail');
      let vendor = localStorage.getItem('role');

      if(!(email && vendor)) return false;
      else return true;
    }
}
