import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { selectLang } from "src/app/store/system/system.selectors";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: "bipay-cookies",
  templateUrl: "./cookies.component.html",
  styleUrls: ["./cookies.component.scss"],
})
export class CookiesComponent implements OnInit {
  lang: string = "";
  faXmarkCircle = faXmarkCircle;
  lang$ = this.store.select(selectLang).subscribe((l) => (this.lang = l));
  hide: boolean = localStorage.getItem("showCookie") == "false" ? true : false;

  constructor(
    private store: Store,
    public dialog: MatDialog,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  hideCookie() {
    this.hide = true;
  }

  generatePag() {
    this.router.navigate([
      "/generic",
      {
        genericUrl:
          "http://bipay.tucasamar.com/enlace/seccion-generica/detalles-de-cookies",
      },
    ]);
  }

  openDialog() {
    this.hideCookie();
    this.dialog.open(ConfigCookie, {
      panelClass: "cookie-modal",
    });
  }

  acceptAll() {
    this.cookieService.set(
      "BipayAllowedCookies",
      JSON.stringify({
        bidaiondo: true,
        moz: true,
        europeanssl: true,
      }),
      { expires: 30, sameSite: "Lax" }
    );
    localStorage.setItem("showCookie", JSON.stringify(false));
    this.hide = true;
  }

  rejectAll() {
    this.cookieService.set(
      "BipayAllowedCookies",
      JSON.stringify({
        bidaiondo: false,
        moz: false,
        europeanssl: false,
      }),
      { expires: 2, sameSite: "Lax" }
    );
    localStorage.setItem("showCookie", JSON.stringify(false));
    this.hide;
  }
}

@Component({
  selector: "config-cookie",
  templateUrl: "config-cookie.html",
  styleUrls: ["./config-cookie.scss"],
})
export class ConfigCookie {
  lang: string = "";
  lang$ = this.store.select(selectLang).subscribe((l) => (this.lang = l));
  faXmarkCircle = faXmarkCircle;
  hide: boolean = false;
  cookies = this.fb.group({
    bidaiondo: true,
    moz: true,
    europeanssl: true,
  });

  constructor(
    public dialogRef: MatDialogRef<ConfigCookie>,
    private store: Store,
    private fb: FormBuilder,
    private cookieService: CookieService
  ) {}

  cookieSave() {
    this.cookieService.set(
      "BipayAllowedCookies",
      JSON.stringify(this.cookies.value),
      { expires: 30, sameSite: "Lax" }
    );
    localStorage.setItem("showCookie", JSON.stringify(false));
    this.onNoClick();
  }

  rejectAll() {
    this.cookieService.set(
      "BipayAllowedCookies",
      JSON.stringify({
        bidaiondo: false,
        moz: false,
        europeanssl: false,
      }),
      { expires: 30, sameSite: "Lax" }
    );
    localStorage.setItem("showCookie", JSON.stringify(false));
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
