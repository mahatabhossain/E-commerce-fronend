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
import { AdminComponent } from './components/admin/admin.component';
import { ChatAppComponent } from './components/chat-app/chat-app.component';


const routes: Routes = [

  //**************// ADMIN ROUTES //*****************/
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'admin/account-control',
    component: AccountcontrolComponent
  },

  //*************// VENDOR LANDING //*************/
  {
    path: 'vendor/add-product',
    component: AddproductComponent
  },
  //*************// USER ROUTES //******************/
  { path: '', 
    redirectTo: 'landing/user', 
    pathMatch: 'full',
  },
  {
    path: 'landing/user',
    component: UserlandingComponent,
  },
  { path: 'register/user', 
    component:SignUpComponent
  },
  { path: 'user/login',
    component:SignInComponent
  },
  { 
    path: 'retrieve/user',
    // canActivate: [AuthGuard],
    component: GetUserComponent
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
    path: '**', 
    component: NotfoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
