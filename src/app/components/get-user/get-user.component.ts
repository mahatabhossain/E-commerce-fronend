import { Component, OnInit } from '@angular/core';
import { DeleteService } from 'src/app/services/delete/delete.service';
import { GetUserService } from '../../services/getUserData/get-user.service';
import { UpdateuserService } from 'src/app/services/updateUser/updateuser.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  usersData: any;

  constructor(
    private userService: GetUserService, 
    private users:DeleteService, 
    private update: UpdateuserService, 
    private router: Router,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.userData();
  }

  userData(){
    this.userService.getUserdata().subscribe((res: any)=>{
      this.usersData = res.data;
    });
  }

  deleteUsers(id: any){
    const token = localStorage.getItem("token")
    this.users.delteUser(id,token).subscribe((res)=>{
      this.snackBar.open("User deleted Successfully", "", {duration:1000})
      this.userData();
    }, (error) =>{
      console.log(error.message)
    })
  }

  updateUser(id: any, body: any){
    this.update.updateUser(id,body).subscribe((res) => {
      console.log(res);
    }, (error) => {
      console.log(error.message);
    })
  }

  onEdit({_id, firstName, lastName, email}:any){
    if(_id){
      this.router.navigate(['update/user'], {queryParams:{_id, firstName, lastName, email}})
    }
    console.log('update component')
  } 
}
