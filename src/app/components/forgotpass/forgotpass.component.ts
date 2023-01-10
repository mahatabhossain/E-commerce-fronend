import { Component, OnInit } from '@angular/core';
import { ForgotPassService } from '../../services/forgotpassword/forgot-pass.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  checkEmail = true;
  newPassword = false;
  // updatePass = false;
  checkEmailButton = true;
  otp = false;
  otpButton = false;
  updatePassButton = false;
  checkEmailText = false;
  otpButtonText = false;

  constructor(
    private forgotPassService: ForgotPassService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  emailCheck(email: any) {
    this.checkEmailText = true;
    console.log("Email", email)
    this.forgotPassService.checkEmail(email).subscribe(res => {
      if (res) { this.newPassword = false } else {
        this.snackBar.open('User not exits', '', {
          duration: 200,
        })
      }
    });

    this.forgotPassService.sendOTP(email).subscribe((res: any) => {
      console.log('Accept length', res);
      if (res.data.accepted[0].length > 0) {
        this.checkEmailText = false;
        this.checkEmailButton = false;
        this.otp = true;
        this.otpButton = true;
        this.snackBar.open(res.status, 'Close', { duration: 3000 })
      }
    });
  };

  submitOTP({otp}: any) {
    this.otpButtonText = true;
    // let OTP = otp.otp
    console.log(typeof otp)
    this.forgotPassService.verifyOTP(otp).subscribe((res: any) => {
      console.log('Verify otp', res);
      if (res) {

        this.checkEmailButton = false
        this.newPassword = true;
        this.otpButton = false;
        this.updatePassButton = true;
      }
    });
  }

  updatePassword(password: any) {
    console.log(password);

  }
}
