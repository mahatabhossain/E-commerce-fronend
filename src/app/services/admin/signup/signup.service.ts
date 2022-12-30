import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient,

  ) { }

  adminSinUp(adminData:any){
    console.log('Admin data from service', adminData)
    return this.http.post(`${baseURL}/create/admin`, adminData);
  }
}
