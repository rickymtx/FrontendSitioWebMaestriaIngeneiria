import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface CuerpoAcademico {
  id_cuerpo: number;
  nombre: string;
  clave: string;
  nivel: string;
  linea_investigacion: string;
}

@Injectable({
  providedIn: 'root'
})
export class CuerposAcademicosService {

  private apiUrl = `${URL_SERVER}/cuerpos-academicos`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<CuerpoAcademico[]> {
    return this.http.get<CuerpoAcademico[]>(this.apiUrl);
  }
}