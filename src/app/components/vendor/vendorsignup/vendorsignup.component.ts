import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../../services/vendor/signup/signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorsignup',
  templateUrl: './vendorsignup.component.html',
  styleUrls: ['./vendorsignup.component.css']
})
export class VendorsignupComponent implements OnInit {

  hidePassword = true;
  signupText = false;
  role = 'Vendor';

  constructor(
    private vendorSignUpService: SignupService,
    public snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onVendorSignUp(formData:string){
    this.signupText = true;
    this.vendorSignUpService.createVendor(formData).subscribe((res:any) => {
      if(res){
        this.signupText = false;
        this.snackBar.open(res.message, 'Close', {
          duration: 3000,
        })
        this.router.navigate(['/vendor/signin'])
      }      
    })
  };

  openDialog(){

  }
}
