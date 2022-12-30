import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UpdateuserService {

  constructor(private http: HttpClient) { }

  updateUser(id: string, data: any){
    // const body = JSON.stringify(data)
    //"put" modify entire data //"patch" modify some part of data
   return this.http.patch(`${baseURL}/update/user/${id}`,data)
  }
}
