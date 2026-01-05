import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface Galeria {
  id_galeria: number;
  titulo: string;
  url: string;
  imagen?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  private apiUrl = `${URL_SERVER}/galeria`;

  constructor(private http: HttpClient) {}

  getGaleria(): Observable<Galeria[]> {
    return this.http.get<Galeria[]>(this.apiUrl);
  }

  getGaleriaById(id: number): Observable<Galeria> {
    return this.http.get<Galeria>(`${this.apiUrl}/${id}`);
  }
}
