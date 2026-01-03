import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface ParticipacionRed {
  id_participacion: number;
  nombre_red: string;
  descripcion: string;
  anio: number;
}

@Injectable({
  providedIn: 'root'
})
export class ParticipacionRedesService {

  private apiUrl = `${URL_SERVER}/participacion-redes`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ParticipacionRed[]> {
    return this.http.get<ParticipacionRed[]>(this.apiUrl);
  }
}