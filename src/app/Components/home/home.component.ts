import { Component, AfterViewInit } from '@angular/core';

// Esto permite usar Bootstrap desde el script global
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const carouselElement = document.querySelector('#demo');
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 2000,
        ride: 'carousel'
      });
    }
  }
}
