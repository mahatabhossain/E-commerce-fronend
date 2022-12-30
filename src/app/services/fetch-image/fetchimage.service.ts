import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { baseURL } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FetchimageService {

  constructor(private http: HttpClient) { }

  fetchImage(){
    return this.http.get(`${baseURL}/get/image`);
  }
}
