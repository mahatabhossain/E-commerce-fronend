import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../../services/signin/signin.service'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public signIn: SigninService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  logOut(){
    let token = localStorage.removeItem('token');
    this.snackBar.open('You are logged out','', {
      duration: 1000
    })
    this.router.navigate(['landing/user'])
  }

}
