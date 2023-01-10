import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../../services/vendor/signin/signin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorsignin',
  templateUrl: './vendorsignin.component.html',
  styleUrls: ['./vendorsignin.component.css']
})
export class VendorsigninComponent implements OnInit {

  hidePassword = true;
  logginText = false;
  role = 'Vendor';

  constructor(
    private vendorSignInService: SigninService,
    public snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  vendorSignin(formData:any){
    this.logginText = true;
    this.vendorSignInService.vendorSignIn(formData).subscribe((res:any) => {
      console.log(res);
      
      if(res){        
        this.logginText = false;
        this.snackBar.open(res.status, 'Close', {
          duration: 3000,
        });
        localStorage.setItem('vendorEmail', res.data.email)
        localStorage.setItem('token', res.token)
        localStorage.setItem('role', res.data.role)
        this.router.navigate(['/vendor/dashboard'])
      }
    })
  }
  rememberPassword(){}
}
