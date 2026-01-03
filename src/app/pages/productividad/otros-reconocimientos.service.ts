import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface OtroReconocimiento {
  id_reconocimiento: number;
  descripcion: string;
  anio: number;
}

@Injectable({
  providedIn: 'root'
})
export class OtrosReconocimientosService {

  private apiUrl = `${URL_SERVER}/otros-reconocimientos`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<OtroReconocimiento[]> {
    return this.http.get<OtroReconocimiento[]>(this.apiUrl);
  }
}