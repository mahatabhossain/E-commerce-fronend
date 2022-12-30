import { Component, OnInit } from '@angular/core';
import { SignupdialogComponent } from '../../signupdialog/signupdialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SignupService } from '../../../services/admin/signup/signup.service';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hidePassword = true;
  signupText = false;
  role = 'Admin';

  constructor(
    public dialog: MatDialog,
    private adminService: SignupService,
    public snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  adminSignUp(adminFormData:any){
    this.signupText = true
    this.adminService.adminSinUp(adminFormData).subscribe((res:any) => {
      console.log('Response', res);
      if(res.data){
        console.log(res.data)
        this.signupText = false;
        this.snackBar.open(res.status, 'Close', {
          duration: 3000,
        });
        this.router.navigate(['admin/login'])

      }
    })
  }

  openDialog(){
    this.dialog.open(SignupdialogComponent)
  }

}
