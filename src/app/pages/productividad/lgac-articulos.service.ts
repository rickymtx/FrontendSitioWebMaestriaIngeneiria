import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface LgacArticulo {
  id_articulo: number;
  titulo: string;
  descripcion: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LgacArticulosService {

  private apiUrl = `${URL_SERVER}/lgac-articulos`;

  constructor(private http: HttpClient) {}

  getArticulos(): Observable<LgacArticulo[]> {
    return this.http.get<LgacArticulo[]>(this.apiUrl);
  }

  getArticuloById(id: number): Observable<LgacArticulo> {
    return this.http.get<LgacArticulo>(`${this.apiUrl}/${id}`);
  }
}