import {Component, OnInit} from '@angular/core';
import {PhotosService} from "../../services/photos.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  photos: string[] = [];
  constructor(private photosService: PhotosService) {
    this.photos = this.photosService.photos;
  }

  ngOnInit() {
  }

  async takePhoto() {
    await this.photosService.addNewPhoto();
  }
}
