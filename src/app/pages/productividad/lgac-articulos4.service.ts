import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface LgacArticulo4 {
  id_articulo: number;
  titulo: string;
  descripcion: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LgacArticulos4Service {

  private apiUrl = `${URL_SERVER}/lgac-articulos4`;

  constructor(private http: HttpClient) {}

  getArticulos(): Observable<LgacArticulo4[]> {
    return this.http.get<LgacArticulo4[]>(this.apiUrl);
  }

  getArticuloById(id: number): Observable<LgacArticulo4> {
    return this.http.get<LgacArticulo4>(`${this.apiUrl}/${id}`);
  }
}