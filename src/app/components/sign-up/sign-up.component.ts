import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupService } from '../../services/signup/signup.service'
import { Router } from "@angular/router"
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { SignupdialogComponent } from '../signupdialog/signupdialog.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  hidePassword = true
  signupText = false
  files: any;

  constructor(
    private http: HttpClient, 
    private signUp: SignupService, 
    private router: Router, 
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }

  onUserSignUp(userData: { fistName: string, lastName: string, email: string, password: string}){
    this.signupText = true
    this.signUp.fetchUser(userData).subscribe((res) => {
      console.log(res)
      if(res){
        this.snackBar.open('Sign up successful','',{
          duration:1000
        })
        this.router.navigate(['user/login'])
      }
      console.log('Sign up successfull');
    });
  }

  // selectFile(event:any){
  //   if(event.files?.length > 0){
  //     this.files = event.files
  //   }
  // }

  openDialog(){
    this.dialog.open(SignupdialogComponent)
  }
}
