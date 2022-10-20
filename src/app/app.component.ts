import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeccionesService } from './services/secciones/secciones.service';
import { Store } from '@ngrx/store';
import { selectSecciones } from 'src/app/store/secciones/secciones.selectors';
import { getSecciones } from 'src/app/store/secciones/secciones.actions';
import {
  NgcCookieConsentService,
  NgcNoCookieLawEvent,
  NgcInitializeEvent,
  NgcStatusChangeEvent,
} from "ngx-cookieconsent";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Bipay';
  secciones$ = this.store.select(selectSecciones);
  private popupOpenSubscription!: Subscription;
  private popupCloseSubscription!: Subscription;
  private initializeSubscription!: Subscription;
  private statusChangeSubscription!: Subscription;
  private revokeChoiceSubscription!: Subscription;
  private noCookieLawSubscription!: Subscription;

  constructor(
    private store: Store,
    private seccionesService: SeccionesService,
    private ccService: NgcCookieConsentService,
  ) {}

  ngOnInit(): void {
    this.seccionesService
      .getSecciones()
      .subscribe((secciones) =>
        this.store.dispatch(getSecciones({ secciones }))
      );

     // subscribe to cookieconsent observables to react to main events
//     this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(() => {});

//     this.popupCloseSubscription = this.ccService.popupClose$.subscribe(() => {});

// //     this.initializeSubscription = this.ccService.initialize$.subscribe(
// //       (event: NgcInitializeEvent) => {
// //         // you can use this.ccService.getConfig() to do stuff...
// //       }
// //     );

//     this.statusChangeSubscription = this.ccService.statusChange$.subscribe((event: NgcStatusChangeEvent) =>  {});

//     this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(() => {});

//     this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe((event: NgcNoCookieLawEvent) => {});
  }

  ngOnDestroy(): void  {
  //  // unsubscribe to cookieconsent observables to prevent memory leaks
  //   this.popupOpenSubscription.unsubscribe();
  //   this.popupCloseSubscription.unsubscribe();
  //   this.initializeSubscription.unsubscribe();
  //   this.statusChangeSubscription.unsubscribe();
  //   this.revokeChoiceSubscription.unsubscribe();
  //   this.noCookieLawSubscription.unsubscribe();
  }
}
