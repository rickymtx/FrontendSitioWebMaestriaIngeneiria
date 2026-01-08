import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface LgacProyecto4 {
  id_proyecto: number;
  titulo: string;
  descripcion: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LgacProyectos4Service {

  private apiUrl = `${URL_SERVER}/lgac-proyectos4`;

  constructor(private http: HttpClient) {}

  getProyectos(): Observable<LgacProyecto4[]> {
    return this.http.get<LgacProyecto4[]>(this.apiUrl);
  }

  getProyectoById(id: number): Observable<LgacProyecto4> {
    return this.http.get<LgacProyecto4>(`${this.apiUrl}/${id}`);
  }
}