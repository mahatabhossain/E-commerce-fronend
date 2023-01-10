import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ForgotPassService {

  constructor(private http: HttpClient) { }

  checkEmail(email: any){
    const header = new HttpHeaders({'content-type': 'application/json'});
    const body = JSON.stringify(email);
    return this.http.post(`${baseURL}/check/email`,body, {headers: header});
  };

  sendOTP(email:any){
    return this.http.post(`${baseURL}/forgot/password`,email);
  };


  verifyOTP(otp:any){
    console.log("from service",typeof otp)
    return this.http.post(`${baseURL}/verify/otp`,{userOTP:otp});
  };

  // updatePassword(id: string){
  //   return this.http.patch(`${baseURL}forgot/password/${id}`);
  // }
}
