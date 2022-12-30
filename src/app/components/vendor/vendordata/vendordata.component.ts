import { Component, OnInit } from '@angular/core';
import { GetvendorService } from 'src/app/services/vendor/vendorData/getvendor.service';

@Component({
  selector: 'app-vendordata',
  templateUrl: './vendordata.component.html',
  styleUrls: ['./vendordata.component.css']
})
export class VendordataComponent implements OnInit {

  constructor(
    private vendorsData: GetvendorService,
  ) { }

  ngOnInit(): void {
  }

}
