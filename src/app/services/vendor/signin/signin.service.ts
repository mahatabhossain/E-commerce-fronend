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
}
