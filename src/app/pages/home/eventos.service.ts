import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface Evento {
  id_evento: number;
  fecha: string;
  titulo: string;
  lugar: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private apiUrl = `${URL_SERVER}/eventos`;

  constructor(private http: HttpClient) {}

  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl);
  }

  getEventoById(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${this.apiUrl}/${id}`);
  }
}