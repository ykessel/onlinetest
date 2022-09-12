import { Categoria } from './categorias.model';

export interface Enlace {
  id: number;
  activo: boolean;
  tituloEn: string | null;
  tituloOtro: string | null;
  tituloEs: string | null;
  enlaceEs: string | null;
  enlaceEn: string | null;
  enlaceOtro: string | null;
  creado: string | null;
  actualizado: string | null;
  categoriaEnlaceEn: Categoria | null;
  categoriaEnlaceOtro: Categoria | null;
  categoriaEnlaceEs: Categoria | null;
}
