import { Servicio } from './../models/servicio.model';
import { Documento } from 'src/app/models/documento.model';
import { Idioma } from '../models/idioma.model';
import { Seccion } from '../models/seccion.model';
import { Asociado } from '../models/asociado.model';
import { Banner } from '../models/banner.model';
import { Caracteristica } from '../models/caracteristica.model';
import { Pago } from '../models/pago.model';
import { Potencialidad } from '../models/potencialidad.model';
import { Social } from '../models/social.model';

export interface AppState {
  secciones: ReadonlyArray<Seccion>;
  documentos: ReadonlyArray<Documento>;
  idiomas: ReadonlyArray<Idioma>;
  servicios: ReadonlyArray<Servicio>;
  sociales: ReadonlyArray<Social>;
  potencialidades: ReadonlyArray<Potencialidad>;
  pagos: ReadonlyArray<Pago>;
  caracteristicas: ReadonlyArray<Caracteristica>;
  banners: ReadonlyArray<Banner>;
  asociados: ReadonlyArray<Asociado>;
}
