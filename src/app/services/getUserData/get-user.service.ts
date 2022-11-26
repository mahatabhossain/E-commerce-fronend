import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http: HttpClient) { }

  getUserdata(){
    return this.http.get(`${baseURL}get/user`);
  }
}
