import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface LgacCapitulo2 {
  id_capitulo: number;
  titulo: string;
  descripcion: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LgacCapitulos2Service {

  private apiUrl = `${URL_SERVER}/lgac-capitulos2`;

  constructor(private http: HttpClient) {}

  getCapitulos(): Observable<LgacCapitulo2[]> {
    return this.http.get<LgacCapitulo2[]>(this.apiUrl);
  }

  getCapituloById(id: number): Observable<LgacCapitulo2> {
    return this.http.get<LgacCapitulo2>(`${this.apiUrl}/${id}`);
  }
}