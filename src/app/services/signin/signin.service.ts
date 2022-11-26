import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }

  userSignIn(userData: any){
    const headers = new HttpHeaders({'content-type': `application/json`});
    const body = JSON.stringify(userData);
    return this.http.post(`${baseURL}signin/user`, body, {headers: headers});
  }

  isLoggedIn():boolean{
    const token = localStorage.getItem('token')
    if(!token) return false;
    return true
  }
}
