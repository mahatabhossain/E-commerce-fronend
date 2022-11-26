import { style } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-accountcontrol',
  templateUrl: './accountcontrol.component.html',
  styleUrls: ['./accountcontrol.component.css']
})
export class AccountcontrolComponent implements OnInit {

  @Input() adminName!: string;
  @Input() companyName!: string;

  @Output() childData = new EventEmitter<string>();

  //Style binding
  tablestyle = {'color': 'green', 'font-style': 'itelic'}

  listOfData:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  dataFromParent(data:any){
    console.log(data)
    this.listOfData.push(data)
    console.log(this.listOfData)
  }

  sendDataToParent(data:any){
    this.childData.emit(data);
  }

}
