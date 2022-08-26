import { selectLang } from './../../../store/system/system.selectors';
import { Component, OnInit } from '@angular/core';
import { IdiomasService } from "src/app/services/idiomas/idiomas.service";
import { CommonService } from "src/app/services/system/common.service";
import { Store } from '@ngrx/store';
import { selectIdiomas } from 'src/app/store/idiomas/idiomas.selectors';
import { getIdiomas } from 'src/app/store/idiomas/idiomas.actions';
import { SetLang } from 'src/app/store/system/system.actions';

@Component({
  selector: 'bipay-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  Idiomas: any[] = [];
  lang: string = ''
  lang$ = this.store.select(selectLang).subscribe((l) => this.lang = l);
  topNavSelected: number = 1;
  flags_base: string = "https://purecatamphetamine.github.io/country-flag-icons/3x2/";
  idiomas$ = this.store.select(selectIdiomas);

  constructor(private store: Store, private idiomasService: IdiomasService, private commonService: CommonService,) { }

  ngOnInit(): void {
    this.idiomasService.getIdiomas()
    .subscribe((idiomas) => this.store.dispatch(getIdiomas({ idiomas })))

    // this.commonService.data$.subscribe((res) => (this.lang = res));
  }


  getFlags(sigla: string) {
    let flag = this.flags_base + sigla.toUpperCase() + ".svg";
    if (sigla === "en") {
      return this.flags_base + "US" + ".svg";
    } else {
      return flag;
    }
  }

  setSelected(number: number) {
    this.topNavSelected = number;
  }

  getLinkStyle(number: number) {
    return this.topNavSelected === number ? "#353535" : "#ae0000";
  }

  getLineStyle(number: number) {
    return this.topNavSelected === number ? "visible" : "hidden";
  }

  changeLang(lang: string) {
    console.log(lang);
    this.store.dispatch(SetLang({ lang }))
    // this.commonService.changeData(value);
  }

}
