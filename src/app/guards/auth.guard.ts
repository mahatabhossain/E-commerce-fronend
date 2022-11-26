import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninService } from '../services/signin/signin.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private signIn: SigninService, private router: Router){

  }
  canActivate()
    {
    return this.authenticateUser();
  }
  
  authenticateUser(){
    let service = this.signIn.isLoggedIn();
    if(service){
    this.router.navigate(['/retrieve/user'])
    return true
  }
   this.router.navigate(['/user/login'])
   return false
  }
}
