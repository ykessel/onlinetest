import { Seccion } from '../models/seccion.model';


export interface AppState {
  secciones: ReadonlyArray<Seccion>;
}
