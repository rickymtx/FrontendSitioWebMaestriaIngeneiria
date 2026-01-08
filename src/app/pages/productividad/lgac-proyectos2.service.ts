import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface LgacProyecto2 {
  id_proyecto: number;
  titulo: string;
  descripcion: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LgacProyectos2Service {

  private apiUrl = `${URL_SERVER}/lgac-proyectos2`;

  constructor(private http: HttpClient) {}

  getProyectos(): Observable<LgacProyecto2[]> {
    return this.http.get<LgacProyecto2[]>(this.apiUrl);
  }

  getProyectoById(id: number): Observable<LgacProyecto2> {
    return this.http.get<LgacProyecto2>(`${this.apiUrl}/${id}`);
  }
}