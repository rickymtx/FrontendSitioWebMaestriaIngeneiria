import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface LgacProyecto {
  id_proyecto: number;
  titulo: string;
  descripcion: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LgacProyectosService {

  private apiUrl = `${URL_SERVER}/lgac-proyectos`;

  constructor(private http: HttpClient) {}

  getProyectos(): Observable<LgacProyecto[]> {
    return this.http.get<LgacProyecto[]>(this.apiUrl);
  }

  getProyectoById(id: number): Observable<LgacProyecto> {
    return this.http.get<LgacProyecto>(`${this.apiUrl}/${id}`);
  }
}