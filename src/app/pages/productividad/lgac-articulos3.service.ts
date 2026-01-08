import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface LgacArticulo3 {
  id_articulo: number;
  titulo: string;
  descripcion: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LgacArticulos3Service {

  private apiUrl = `${URL_SERVER}/lgac-articulos3`;

  constructor(private http: HttpClient) {}

  getArticulos(): Observable<LgacArticulo3[]> {
    return this.http.get<LgacArticulo3[]>(this.apiUrl);
  }

  getArticuloById(id: number): Observable<LgacArticulo3> {
    return this.http.get<LgacArticulo3>(`${this.apiUrl}/${id}`);
  }
}