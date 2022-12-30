import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadtextService {

  constructor(private http: HttpClient) { }

  readTest(){
    return this.http.get('../../assets/mongodb.txt', {responseType: 'text'}).subscribe((data: any) => {
      console.log(data)
    })
  }
}
