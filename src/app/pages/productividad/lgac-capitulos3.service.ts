import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface LgacCapitulo3 {
  id_capitulo: number;
  titulo: string;
  descripcion: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LgacCapitulos3Service {

  private apiUrl = `${URL_SERVER}/lgac-capitulos3`;

  constructor(private http: HttpClient) {}

  getCapitulos(): Observable<LgacCapitulo3[]> {
    return this.http.get<LgacCapitulo3[]>(this.apiUrl);
  }

  getCapituloById(id: number): Observable<LgacCapitulo3> {
    return this.http.get<LgacCapitulo3>(`${this.apiUrl}/${id}`);
  }
}