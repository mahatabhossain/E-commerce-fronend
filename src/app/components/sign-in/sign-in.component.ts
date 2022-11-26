import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../services/signin/signin.service';
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  logginText = false;
  hidePassword = true;

  public savedEmail: any;
  public savedPassword: any;

  constructor(
    private signIn: SigninService, 
    private router: Router, 
    private snackBar: MatSnackBar, 
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }

  userSignIn(userData: {email: string, password: string}){
    this.logginText = true
    this.signIn.userSignIn(userData).subscribe((result: any)=>{
      if(result){
        // let results = {
        //   "token":result.token,
        //   "email":result.user.email,
        //   "password":result.user.password,
        // };
        // localStorage.setItem('dataset', JSON.stringify(results));

        console.log("result", result.user.email,result.user.password )
        localStorage.setItem("token", result.token);
        localStorage.setItem("email", result.user.email);
        localStorage.setItem("password", result.user.password);

        this.router.navigate(['/retrieve/user'])
        this.snackBar.open('Sign in successful', '', {
          duration: 1000
        });
        console.log('login successfull');
      }
    }, (error) => {
      console.log(error.message);
    });
  }

  rememberPassword(){
    let userEmail = localStorage.getItem('email');
    let userPassword = localStorage.getItem('password');
    console.log('Remember password', userEmail, userPassword)
    this.savedEmail = userEmail;
    this.savedPassword = userPassword;
  }
  
}




