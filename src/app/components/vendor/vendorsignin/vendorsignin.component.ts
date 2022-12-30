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
      if(res){        
        this.logginText = false;
        this.snackBar.open(res.message, 'Close', {
          duration: 3000,
        });
        this.router.navigate(['/vendor/dashboard'])
      }
    })
  }
  rememberPassword(){}
}
