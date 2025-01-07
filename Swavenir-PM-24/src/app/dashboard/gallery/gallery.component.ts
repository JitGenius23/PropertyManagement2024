import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  NavigationExtras,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  constructor(private route: Router) {}

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  // Array to generate boxes
  boxes = Array.from({ length: 20 }, (_, i) => `Box ${i + 1}`);

  // Scroll left
  scrollLeft() {
    const container = this.scrollContainer.nativeElement;
    container.scrollLeft -= 200; // Adjust scrolling speed
  }

  // Scroll right
  scrollRight() {
    const container = this.scrollContainer.nativeElement;
    container.scrollLeft += 200; // Adjust scrolling speed
  }

  boxClick(index: number) {
    if (index + 1 === 1) {
      // this.route.navigate([{ outlets: { pictureVideo: ['pictureVideo'] } }]);
    }
  }
}
