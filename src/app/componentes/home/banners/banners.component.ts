import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
} from "@angular/core";
import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
  state,
} from "@angular/animations";
import { Store } from "@ngrx/store";
import { BannersService } from "src/app/services/banners/banners.service";
import { getBanners } from "src/app/store/banners/banners.actions";
import { selectLang } from "src/app/store/system/system.selectors";
import { selectBanners } from "./../../../store/banners/banners.selectors";
import { Banner } from "src/app/models/banner.model";
import { first, take } from "rxjs/operators";

@Component({
  selector: "bipay-banners",
  templateUrl: "./banners.component.html",
  styleUrls: ["./banners.component.scss"],
  encapsulation: ViewEncapsulation.None,
  animations: [
    // trigger("anima", [
    //   state("in", style({  left: "-100%", width: "100%" })),

    //   state("out", style({ left: "0%" , opacity: 0 })),

    //   transition("out => in", [animate("1000ms ease-out", style({ opacity: 1, width: '100%' }))]),

    //   transition("in => out", [
    //     style({ position: "relative" }),
    //     style({ position: "absolute", top: 0, left: 0, width: "100%" }),
    //     // animate("2s ease-out", style({ left: "100%", opacity: 0 })),
        
    //     // animate("2000ms ease-out")]
    //   // ),
    //   // transition("out => in", [animate("100ms")]),
    // ]),

    //  trigger('in', [
    //   state(':enter',
    //   style({ opacity: 1, backgroundColor: 'green' })
    // ),
    // ])

    // trigger("anima", [
    //   transition("* <=> *", [
    //     style({ position: "relative" }),
    //     query(":enter, :leave", [
    //       style({ position: "absolute", top: 0, left: 0, width: "100%" }),
    //     ]),
    //     query(":enter", [style({ left: "-100%" })]),

    //     group([
    //       query(":leave", [
    //         animate("2s ease-out", style({ left: "100%", opacity: 0 })),
    //       ]),
    //       query(":enter", [animate("2s ease-out", style({ left: "0%" }))]),
    //     ]),
    //   ]),
    // ]),
  ],
})
export class BannersComponent implements OnInit, AfterViewInit, OnDestroy {
  lang: string = "";
  hideId: number = 0;
  total: number = 0;
  idInterval!: any;
  time: number = 7000;
  banners$ = this.store.select(selectBanners);
  lang$ = this.store.select(selectLang).subscribe((l) => (this.lang = l));
  totalBanners = this.banners$.subscribe((a) => (this.total = a.length));

  constructor(private store: Store, private bannersService: BannersService) {}

  ngAfterViewInit(): void {
    this.idInterval = setInterval(this.changeBanner, this.time);
  }

  ngOnInit(): void {
    this.bannersService
      .getBanners()
      .subscribe((banners) => this.store.dispatch(getBanners({ banners })));
  }

  ngOnDestroy() {
    if (this.idInterval) {
      clearInterval(this.idInterval);
    }
  }

  changeBanner = () => {
    if (this.hideId < this.total) {
      this.hideId++;
    }
    if (this.hideId === this.total - 1) {
      this.time = 0;
    } else if (this.hideId === this.total) {
      clearInterval(this.idInterval);
      this.hideId = 0;
      this.idInterval = setInterval(this.changeBanner, 7000);
    }
  };
}
