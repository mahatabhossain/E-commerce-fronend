import { Component, OnInit } from '@angular/core';
import { ForgotPassService } from '../../services/forgotpassword/forgot-pass.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  checkEmail = true;
  newPassword = false;
  updatePass = false;
  buttonControl = true;
  
  constructor(private forgotPass: ForgotPassService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  emailCheck(email:any){
    console.log(email)
    this.forgotPass.checkEmail(email).subscribe(res => {
      console.log("response", res)
      if(res) {
        this.buttonControl = false;
        this.newPassword = true;
        this.checkEmail = false;
        this.updatePass = true;
        this.snackBar.open('User exits', '', {
          duration: 1000
        })
      }else{
        this.snackBar.open('User not exits', '', {
          duration: 200
        })
      }
    })
  };

  fotgotPassword(password: any){
    this.checkEmail = false;
    console.log(password);
    console.log("Update password");
  }
}
