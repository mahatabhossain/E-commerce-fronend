import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../../services/admin/signin/signin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  hidePassword = true;
  loginText = false;
  role = 'Admin';
  
  constructor(
    private signIn:SigninService,
    public snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  adminLogin(value:any){
    this.loginText = true;
    this.signIn.adminLoginService(value).subscribe((res:any) =>{
      console.log(res)
      if(res){
        this.snackBar.open(res.message, "Close", {
          duration: 3000,
        });
        this.loginText = false;
        this.router.navigate([ 'admin/dashboard'])

        localStorage.setItem('emailId',res.data.email);
        localStorage.setItem('role', res.data.role)
      }; 
    });  
  };

}
