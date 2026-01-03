import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface OrientacionProfesional {
  id_orientacion: number;
  materia: string;
  creditos: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrientacionProfesionalService {

  private apiUrl = `${URL_SERVER}/orientacion-profesional`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<OrientacionProfesional[]> {
    return this.http.get<OrientacionProfesional[]>(this.apiUrl);
  }
}
