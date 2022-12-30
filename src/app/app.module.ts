import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { GetUserComponent } from './components/get-user/get-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { SignupdialogComponent } from './components/signupdialog/signupdialog.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { UserlandingComponent } from './components/userlanding/userlanding.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { SuperadminComponent } from './components/superadmin/superadmin.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { AccountcontrolComponent } from './components/admin/accountcontrol/accountcontrol.component';
import { ProductcontrolComponent } from './components/admin/productcontrol/productcontrol.component';
import { AddproductComponent } from './components/vendor/addproduct/addproduct.component';
import { ChatAppComponent } from './components/chat-app/chat-app.component';
import { ProductComponent } from './components/product/product.component';
import { SigninComponent } from './components/admin/signin/signin.component';
import { SignupComponent } from './components/admin/signup/signup.component';
import { ThreeComponent } from './components/three/three.component';
import { VendorsigninComponent } from './components/vendor/vendorsignin/vendorsignin.component';
import { VendorsignupComponent } from './components/vendor/vendorsignup/vendorsignup.component';
import { VendordataComponent } from './components/vendor/vendordata/vendordata.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    GetUserComponent,
    NavbarComponent,
    UpdateuserComponent,
    NotfoundComponent,
    SignupdialogComponent,
    ForgotpassComponent,
    UserlandingComponent,
    FooterComponent,
    AdminComponent,
    SuperadminComponent,
    VendorComponent,
    AccountcontrolComponent,
    ProductcontrolComponent,
    AddproductComponent,
    ChatAppComponent,
    ProductComponent,
    SigninComponent,
    SignupComponent,
    ThreeComponent,
    VendorsigninComponent,
    VendorsignupComponent,
    VendordataComponent,
    // DialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
