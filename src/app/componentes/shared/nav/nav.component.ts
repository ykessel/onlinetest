import { Component, OnInit } from '@angular/core';
import { IdiomasService } from "src/app/services/idiomas/idiomas.service";
import { CommonService } from "src/app/services/system/common.service";

@Component({
  selector: 'bipay-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  Idiomas: any[] = [];
  lang: string = "";
  topNavSelected: number = 1;
  flags_base: string = "https://purecatamphetamine.github.io/country-flag-icons/3x2/";


  constructor(private idiomasService: IdiomasService,private commonService: CommonService,) { }

  ngOnInit(): void {
    this.commonService.data$.subscribe((res) => (this.lang = res));
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

  
  changeLang(value: string) {
    this.commonService.changeData(value);
  }

}
