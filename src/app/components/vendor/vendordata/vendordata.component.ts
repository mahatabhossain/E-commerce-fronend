import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetvendorService } from 'src/app/services/vendor/vendorData/getvendor.service';
import { DeletevendorService } from 'src/app/services/vendor/deletevendor/deletevendor.service';
import { UpdateVendorService } from 'src/app/services/vendor/updatevendor/update-vendor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendordata',
  templateUrl: './vendordata.component.html',
  styleUrls: ['./vendordata.component.css']
})
export class VendordataComponent implements OnInit {

  // @Output() vendor = new EventEmitter<[]>();


  vendorList: any;
  vendorDetails: any;

  constructor(
    private vendorsData: GetvendorService,
    private deleteVendor: DeletevendorService,
    public snackBar: MatSnackBar,
    private updateVendor: UpdateVendorService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getVendorData()
  }

  getVendorData() {
    this.vendorsData.getVendorData().subscribe((res: any) => {
      if (res != null && res.data != null) {
        let vendorData = res.data
        if (vendorData) {
          this.vendorList = vendorData;
        }
      }
    },
      (error: any) => {
        if (error) {
          this.vendorList = [];
        }
      })
  }

  onEdit({ _id, firstName, lastName, email }: any) {
    // this.vendorsData.getVendorDetailsById(vendorId).subscribe((res:any) => {
    //   let data = res.data;
    //   for(let [key, value] of Object.entries(data)){
    //     if(key === 'firstName' || key === 'lastName' || key === 'email') this.vendorDetails.push(value)   
    //   }
    //   console.log("vendor data", this.vendorDetails)
    // })
    if (_id) this.router.navigate(['/vendor/update'], { queryParams: { _id, firstName, lastName, email } })
  }

  deleteVendorData(vendorId: any) {
    this.deleteVendor.deleteVendorData(vendorId).subscribe((res: any) => {
      console.log(res);

      if (res) {
        this.snackBar.open(res.message, 'Close', {
          duration: 3000,
        })
      }
      this.getVendorData()
    })
  }

}
