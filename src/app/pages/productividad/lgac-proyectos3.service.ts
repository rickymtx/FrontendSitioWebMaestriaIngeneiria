import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface LgacProyecto3 {
  id_proyecto: number;
  titulo: string;
  descripcion: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LgacProyectos3Service {

  private apiUrl = `${URL_SERVER}/lgac-proyectos3`;

  constructor(private http: HttpClient) {}

  getProyectos(): Observable<LgacProyecto3[]> {
    return this.http.get<LgacProyecto3[]>(this.apiUrl);
  }

  getProyectoById(id: number): Observable<LgacProyecto3> {
    return this.http.get<LgacProyecto3>(`${this.apiUrl}/${id}`);
  }
}