import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateuserService } from 'src/app/services/updateUser/updateuser.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  
  public presentEmail = "";
  public presentFName = "";
  public presentLName = "";

  constructor(
    private userData: UpdateuserService, 
    private route:ActivatedRoute, 
    private router: Router, 
    public snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(({firstName, lastName, email}:any)=>{
      this.presentEmail = email
      this.presentFName = firstName
      this.presentLName = lastName     
    })
  }

  updateUserInfo(updateData: {firstName: string, lastName: string, email: string}){
    this.route.queryParams.subscribe((query:any)=>{      
      this.userData.updateUser(query._id,updateData).subscribe((res)=>{
        this.snackBar.open("User updated successfully", "", {
          duration: 1000,
        })
        this.router.navigate(['retrieve/user'])
      },(error)=>{
        console.log(error.message)
      }) 
    })
  }
}
