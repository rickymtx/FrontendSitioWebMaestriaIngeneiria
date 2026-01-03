import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface AsignaturaOptativa {
  id_optativas: number;
  materia: string;
  creditos: number;
}

@Injectable({
  providedIn: 'root'
})
export class AsignaturasOptativasService {

  private apiUrl = `${URL_SERVER}/asignaturas-optativas`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<AsignaturaOptativa[]> {
    return this.http.get<AsignaturaOptativa[]>(this.apiUrl);
  }
}
