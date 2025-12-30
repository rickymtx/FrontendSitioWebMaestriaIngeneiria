import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface Lgyac {
  id_lgyac: number;
  nombre: string;
  objetivos: string;
}

@Injectable({
  providedIn: 'root'
})
export class LgyacService {

  private readonly baseUrl = `${URL_SERVER}/lgyac`;

  constructor(private http: HttpClient) {}

  /**
   * Obtener todas las LGyAC
   */
  getAll(): Observable<Lgyac[]> {
    return this.http.get<Lgyac[]>(this.baseUrl);
  }
}
