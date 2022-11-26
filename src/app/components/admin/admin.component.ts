import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AccountcontrolComponent } from './accountcontrol/accountcontrol.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {
[x: string]: any;

  //@ViewChild decorator access child component to pass data from parent 
  @ViewChild(AccountcontrolComponent) adminData!: AccountcontrolComponent;
  @ViewChild('parentBtn') private parentButton!: MatButton;
  @ViewChild('changeText') private adminTitle!: ElementRef;

  //Style binding
  childDataColor = "color: red;"

  title = '';
  inptuName!: '';
  companyName!: '';
  response: any;
  adminResp: any;
  childInfo!:string;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.parentButton.color = 'primary';
    console.log(this.adminTitle);
    this.adminTitle.nativeElement.innerHTML = 'Admin working well';
  }


  transferData(data:any){
    console.log(data)
    this.inptuName = data.name;
    this.companyName = data.company;
    this.adminResp = this.adminData.dataFromParent(data);

  }

  updateTitle(title: any){
    this.title = title;
  }
  dataFromChild($event:any){
    this.childInfo = $event;
  }

}
