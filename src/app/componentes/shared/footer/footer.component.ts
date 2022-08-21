import { Component, OnInit } from '@angular/core';
import { IdiomasService } from 'src/app/services/idiomas/idiomas.service';
import { CommonService } from 'src/app/services/system/common.service';
import { AsociadosService } from 'src/app/services/asociados/asociados.service';
import { SeccionesService } from 'src/app/services/secciones/secciones.service';
import { SocialesService } from 'src/app/services/sociales/sociales.service';
// import { faCoffee, faFacebook, faInstagram, faTwitter, faYoutube, faTikTok, faLinkedIn, faPinterest, faMessenger, faSnapchat, faReddit } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bipay-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  lang: string = '';
  Idiomas: any[] = [];
  Asociados: any[] = [];
  Secciones: any[] = [];
  Sociales: any[] = [];
  faCoffee = faCoffee;



  constructor(private socialesService: SocialesService, private seccionesService: SeccionesService, private asociadosService: AsociadosService, private idiomasService: IdiomasService,
    private commonService: CommonService,) { }

  ngOnInit(): void {
    this.commonService.data$.subscribe(res => this.lang = res) 
    this.getIdiomas();
    this.getAsociadosService();
    this.getSecciones();
    this.getSociales();
    }

  getSociales() {
    this.socialesService.getSociales().subscribe((s) => {
      this.Sociales = s;
      console.log('Sociales', s);
    });
  }
    
  getIdiomas() {
    this.idiomasService.getIdiomas()
    .subscribe(s => {
      this.Idiomas = s;
    });
  }

    getSecciones() {
    this.seccionesService.getSecciones().subscribe((s) => {
      this.Secciones = s;
    });
  }


   getAsociadosService() {
    this.asociadosService.getAsociados().subscribe((s) => {
      this.Asociados = s.concat(s).concat(s);
   });
}}