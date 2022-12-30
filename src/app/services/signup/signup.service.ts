import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  fetchUser(userData: any){

    const headers = new HttpHeaders({'content-type': 'multipart/form-data'});
    // const body = JSON.stringify(userData);

    return this.http.post(`${baseURL}/create/user`, userData,{'headers': headers});
  }
}
