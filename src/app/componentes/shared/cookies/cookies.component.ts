import { Component, OnInit } from '@angular/core';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bipay-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {
  hide: boolean = false;
  faXmarkCircle = faXmarkCircle;

  constructor() { }

  ngOnInit(): void {
  }

  hideCookie() {
    this.hide = true;
  }

}
