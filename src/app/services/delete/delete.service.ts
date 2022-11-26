import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http: HttpClient) { }

  delteUser(id:any, token: any){
    const headers = new HttpHeaders({'content-type': 'application/json'})
    .set('Access-Control-Allow-Origin', "*")
    .set('Authorization',"Bearer " + token)
    return this.http.delete(`${baseURL}delete/user/${id}`, {headers})
  }
}
