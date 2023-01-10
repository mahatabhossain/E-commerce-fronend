import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { GetUserComponent } from './components/get-user/get-user.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { UserlandingComponent } from './components/userlanding/userlanding.component';
import { AccountcontrolComponent } from './components/admin/accountcontrol/accountcontrol.component';
import { AddproductComponent } from './components/vendor/addproduct/addproduct.component';
import { ChatAppComponent } from './components/chat-app/chat-app.component';
import { ProductComponent } from './components/product/product.component';

// ADMIN COMPONENTS
import { AdminComponent as adminDashboard} from './components/admin/admin.component';
import { SigninComponent as adminLogin} from '../app/components/admin/signin/signin.component';
import { SignupComponent } from '../app/components/admin/signup/signup.component';
import { ThreeComponent } from './components/three/three.component';
import { VendorsigninComponent } from './components/vendor/vendorsignin/vendorsignin.component';
import { VendorsignupComponent } from './components/vendor/vendorsignup/vendorsignup.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { VendordataComponent } from './components/vendor/vendordata/vendordata.component';
import { UpdatevendorComponent } from './components/vendor/updatevendor/updatevendor.component';


const routes: Routes = [

  //**************// ADMIN ROUTES //*****************/
  {
    path: 'admin/dashboard',
    component: adminDashboard,
    children: [
      {
        path: 'test',
        component: AddproductComponent,
      }
    ]
  },
  {
    path: 'admin/signup',
    component: SignupComponent,
  },
  {
    path: 'admin/login',
    component: adminLogin,
  },
  {
    path: 'admin/account-control',
    component: AccountcontrolComponent
  },
  { 
    path: 'retrieve/user',
    // canActivate: [AuthGuard],
    component: GetUserComponent
  },

  //*************// VENDOR ROUTERS //*************/
  {
    path: 'vendor/dashboard',
    component: VendorComponent,
  },
  {
    path: 'vendor/add-product',
    component: AddproductComponent,
    children:[],
  },

  {
    path: 'vendor/signin',
    component: VendorsigninComponent,
  },
  {
    path: 'vendor/signup',
    component: VendorsignupComponent,
  },
  {
    path: 'vendor/data',
    component: VendordataComponent,
  },
  {
    path: 'vendor/update',
    component: UpdatevendorComponent,
  },

  //*************// USER ROUTES //******************/
  { path: '', 
    redirectTo: 'user/landing', 
    pathMatch: 'full',
    // children: [],
  },
  {
    path: 'user/landing',
    component: UserlandingComponent,
  },
  { path: 'register/user', 
    component:SignUpComponent
  },
  { path: 'user/login',
    component:SignInComponent
  },
  { 
    path: 'update/user', 
    component: UpdateuserComponent
  },
  {
    path: 'forgot/password',
    component: ForgotpassComponent,
  },
  {
    path: 'chat',
    component: ChatAppComponent,
  },
  {
    path: 'products',
    component: ProductComponent
  },

  //****************// EXPERIMENTS //*********** */ */
  {
    path: 'three',
    component: ThreeComponent,
  },

  {  
    path: '**', 
    component: NotfoundComponent 
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
