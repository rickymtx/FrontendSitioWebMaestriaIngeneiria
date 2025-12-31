import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface RequisitoGrado {
  id_grado: number;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequisitosGradoService {

  private readonly apiUrl = `${URL_SERVER}/requisitos-grado`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<RequisitoGrado[]> {
    return this.http.get<RequisitoGrado[]>(this.apiUrl);
  }
}
