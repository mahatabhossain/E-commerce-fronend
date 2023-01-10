import { Component, OnInit } from '@angular/core';
import { GetvendorService } from 'src/app/services/vendor/vendorData/getvendor.service';
import { UpdateVendorService } from 'src/app/services/vendor/updatevendor/update-vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-updatevendor',
  templateUrl: './updatevendor.component.html',
  styleUrls: ['./updatevendor.component.css']
})
export class UpdatevendorComponent implements OnInit {

  vendorId = '';
  vendorFistName = '';
  vendorLastName = '';
  vendorEmail = '';

  updateText = false;

  constructor(
    private vendorList:GetvendorService,
    private updateVendor:UpdateVendorService,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.updateVendorFormField()
  }

  updateVendorFormField(){
    this.route.queryParams.subscribe(({_id, firstName, lastName, email}:any) => {
      this.vendorFistName = firstName;
      this.vendorLastName = lastName;
      this.vendorEmail = email;
      this.vendorId = _id;      
    })
  }

  updateVendorInfo(data:any){
    console.log(data, this.vendorId)
    this.updateVendor.updateVendorData(this.vendorId, data).subscribe((res:any) => {
      this.updateText = true;
      this.snackBar.open('Vendor updated successfully', 'Close', {duration:2000})
      setTimeout(() => {
        this.router.navigate(['/vendor/data'])}, 2000)
      console.log('vendor update successfull', res);
    }) 
  }

}
