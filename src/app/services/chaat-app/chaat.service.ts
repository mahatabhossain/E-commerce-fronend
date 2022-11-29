import { Injectable } from '@angular/core';
import { BehaviorSubject, observable} from 'rxjs';
import { io } from 'socket.io-client' 
import { baseURL } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ChaatService {

message: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  socket = io(baseURL)
  
  sendMessageToUser(message:string){
    this.socket.emit('message', message);
  };

  getMessage(){
    this.socket.on('message', (message) => {
      this.message.next(message)
    });
    return this.message.asObservable();
  }
}
