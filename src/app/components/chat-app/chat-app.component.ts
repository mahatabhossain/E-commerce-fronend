import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { ChaatService } from '../../services/chaat-app/chaat.service'

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit {

  // tokenForm = this.formBuilder.group({
  //   token: "",
  // });
  
  newMessage!: string;
  messageList: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private chat: ChaatService,
    ) { }

  ngOnInit(): void {
    this.chat.getMessage().subscribe((msg:string) => {
      this.messageList.push(msg);
    })
  }
  
sendMessage(){
  this.chat.sendMessageToUser(this.newMessage);
  this.newMessage = '';
};

}
