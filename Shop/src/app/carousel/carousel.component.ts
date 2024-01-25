import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  images = [
    'assets/img/image1.png',
    'assets/img/image2.png',
    'assets/img/image3.png'
  ];
  currentImage = 0;
  autoChangeInterval: any;

  constructor() {
    this.startAutoChange();
  }

  ngOnDestroy() {
    if (this.autoChangeInterval) {
      clearInterval(this.autoChangeInterval);
    }
  }

  startAutoChange() {
    this.autoChangeInterval = setInterval(() => {
      this.next();
    }, 3000); // wechselt das Bild alle 3000 Millisekunden (3 Sekunden)
  }

  next() {
    this.currentImage = (this.currentImage + 1) % this.images.length;
  }

  previous() {
    this.currentImage =
      this.currentImage === 0 ? this.images.length - 1 : this.currentImage - 1;
  }

}
