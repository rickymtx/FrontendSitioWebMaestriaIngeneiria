import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface RequisitoIngreso {
  id_requisito: number;
  categoria: 'antecedentes' | 'requisitos' | 'seleccion' | 'URLs';
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequisitosIngresoService {

  private apiUrl = `${URL_SERVER}/requisitos-ingreso`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<RequisitoIngreso[]> {
    return this.http.get<RequisitoIngreso[]>(this.apiUrl);
  }

  getByCategoria(categoria: string): Observable<RequisitoIngreso[]> {
    return this.http.get<RequisitoIngreso[]>(
      `${this.apiUrl}/categoria/${categoria}`
    );
  }
}
