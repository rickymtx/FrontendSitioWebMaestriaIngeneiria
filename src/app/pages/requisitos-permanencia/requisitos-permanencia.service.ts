import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface RequisitoPermanencia {
  id_requisito: number;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequisitosPermanenciaService {

  private readonly apiUrl = `${URL_SERVER}/requisitos-permanencia`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<RequisitoPermanencia[]> {
    return this.http.get<RequisitoPermanencia[]>(this.apiUrl);
  }
}
