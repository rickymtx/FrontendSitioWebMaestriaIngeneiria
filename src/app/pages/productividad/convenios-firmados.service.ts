import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface ConvenioFirmado {
  id_convenio: number;
  nombre: string;
  institucion: string;
  fecha_firma: string;
  vigencia: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConveniosFirmadosService {

  private apiUrl = `${URL_SERVER}/convenios-firmados`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ConvenioFirmado[]> {
    return this.http.get<ConvenioFirmado[]>(this.apiUrl);
  }
}