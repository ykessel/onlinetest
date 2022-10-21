import { Component, OnInit } from '@angular/core';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { selectLang } from 'src/app/store/system/system.selectors';

@Component({
  selector: 'bipay-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {
  hide: boolean = localStorage.getItem('showCookie') == 'false' ? true : false;
  faXmarkCircle = faXmarkCircle;

  constructor(private store: Store,  public dialog: MatDialog) {}

  ngOnInit(): void {}

  hideCookie() {
    localStorage.setItem('showCookie', JSON.stringify(false));
    this.hide = true;
  }

  openDialog() {
    this.hideCookie()
    this.dialog.open(ConfigCookie, {
      panelClass: "cookie-modal"
    });
  }

}

@Component({
  selector: 'config-cookie',
  templateUrl: 'config-cookie.html',
  styleUrls: ['./config-cookie.scss'],
})
export class ConfigCookie {
  lang: string = '';
  lang$ = this.store.select(selectLang).subscribe((l) => (this.lang = l));
  faXmarkCircle = faXmarkCircle;
  hide: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ConfigCookie>,
    private store: Store
  ) {}

  hideCookie() {
    this.hide = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
