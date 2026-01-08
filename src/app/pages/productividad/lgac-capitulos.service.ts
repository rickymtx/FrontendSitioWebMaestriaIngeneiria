import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface LgacCapitulo {
  id_capitulo: number;
  titulo: string;
  descripcion: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LgacCapitulosService {

  private apiUrl = `${URL_SERVER}/lgac-capitulos`;

  constructor(private http: HttpClient) {}

  getCapitulos(): Observable<LgacCapitulo[]> {
    return this.http.get<LgacCapitulo[]>(this.apiUrl);
  }

  getCapituloById(id: number): Observable<LgacCapitulo> {
    return this.http.get<LgacCapitulo>(`${this.apiUrl}/${id}`);
  }
}