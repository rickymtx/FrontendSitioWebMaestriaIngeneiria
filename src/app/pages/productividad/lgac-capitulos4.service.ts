import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface LgacCapitulo4 {
  id_capitulo: number;
  titulo: string;
  descripcion: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LgacCapitulos4Service {

  private apiUrl = `${URL_SERVER}/lgac-capitulos4`;

  constructor(private http: HttpClient) {}

  getCapitulos(): Observable<LgacCapitulo4[]> {
    return this.http.get<LgacCapitulo4[]>(this.apiUrl);
  }

  getCapituloById(id: number): Observable<LgacCapitulo4> {
    return this.http.get<LgacCapitulo4>(`${this.apiUrl}/${id}`);
  }
}