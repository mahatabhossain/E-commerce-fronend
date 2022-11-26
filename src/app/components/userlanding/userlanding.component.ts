import { Component, OnInit } from '@angular/core';
import { FetchimageService } from '../../services/fetch-image/fetchimage.service'

@Component({
  selector: 'app-userlanding',
  templateUrl: './userlanding.component.html',
  styleUrls: ['./userlanding.component.css']
})
export class UserlandingComponent implements OnInit {

  images: any;

  constructor(private imageService: FetchimageService) { }

  ngOnInit(): void {
  }

  showImage(){
    this.imageService.fetchImage().subscribe((res) => {
      console.log(res)
      this.images = res;
    })
  }

}
