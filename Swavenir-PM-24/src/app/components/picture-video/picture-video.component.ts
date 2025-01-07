import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-picture-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './picture-video.component.html',
  styleUrl: './picture-video.component.css'
})
export class PictureVideoComponent {

  showPopup: boolean = false;

  popupImageUrl: string = '';
  

  showImage(event: any) {
    this.popupImageUrl = event.target.src;
    this.showPopup = true;
  }

  hideImage(){
    this.showPopup = false;
    this.popupImageUrl = '';
  }

}
