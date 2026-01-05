import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface Portada {
  id_portada: number;
  titulo: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortadaService {

  private apiUrl = `${URL_SERVER}/portada`;

  constructor(private http: HttpClient) {}

  getPortadas(): Observable<Portada[]> {
    return this.http.get<Portada[]>(this.apiUrl);
  }
}