import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bipay-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mySlideImages = ['../assets/banner.png','../assets/banner.png','../assets/banner.png'];
  myCarouselImages =['../assets/banner.png','../assets/banner.png','../assets/banner.png'];

  mySlideOptions={items: 1, dots: true, nav: true};
  myCarouselOptions={items: 3, dots: true, nav: true};

}
