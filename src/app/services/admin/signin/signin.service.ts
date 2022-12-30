import { Injectable } from '@angular/core';
import { baseURL } from '../../../../environments/environment';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient) { }

  adminLoginService(adminData:any){
    console.log("Admin data",adminData)
    // const headers = new HttpHeaders({"content-type": 'applicaton/json'})
    // const body = JSON.stringify(adminData);
    // console.log("Body",body)
    return this.http.post(`${baseURL}/admin/login`,adminData);
  };

  isAdminLoggedIn():boolean{
    const email = localStorage.getItem('emailId');
    if(!email) return false;
    return true;
  }
  role = localStorage.getItem('role');
}
