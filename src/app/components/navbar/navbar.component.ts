import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../../services/signin/signin.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { SigninService as adminSignInService } from '../../services/admin/signin/signin.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // role = this.adminSignIn.role;
  role: any;

  constructor(
    public signIn: SigninService, 
    private router: Router, 
    private snackBar: MatSnackBar,
    public adminSignIn: adminSignInService,
    private location: Location,
    ) { 
      // if(this.location.path().search('admin')) {this.role = 'admin'};
      // if(this.location.path().search('user')) {this.role = 'user'};
      // if(this.location.path().search('vendor')) {this.role = 'vendor'};
      if(this.location.path().split('/')[1] == 'admin') {this.role = 'admin'};
      if(this.location.path().split('/')[1] == 'user') {this.role = 'user'};
      if(this.location.path().split('/')[1] == 'vendor') {this.role = 'vendor'};
      console.log('URL', this.location.path().split('/')[1])
      console.log(this.role)
    }

  ngOnInit(): void {
  }

  // checkRole(){
  //   if(this.location.path().search('admin')) {this.role = 'admin'};
  //   if(this.location.path().search('user')) {this.role = 'user'};
  //   if(this.location.path().search('vendor')) {this.role = 'vendor'};
  //   console.log("URL",this.location.path());
  //   console.log("URL", this.router.url.split('/')[0])
  //   this.role = this.router.url.split('/')[0]
  //   return this.role;
  // }


  // ****************// LOGOUT USER //******************** */
  logoutUser(){
    let token = localStorage.removeItem('token');
    this.snackBar.open('You are logged out','', {
      duration: 1000,
    })
    this.router.navigate(['landing/user'])
  }

  //******************// LOGOUT ADMIN //******************* */
  logoutAdmin(){
    localStorage.removeItem('emailId');
    localStorage.removeItem('role');
    this.snackBar.open('You are logged out', 'Close', {
      duration: 1000,
    });
    this.router.navigate(['admin/login']);
  };

  //*****************// LOGOUT VENDOR //*********************** */

}
