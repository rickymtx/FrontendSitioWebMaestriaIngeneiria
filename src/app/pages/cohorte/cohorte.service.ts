import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';
import { Cohorte } from './cohorte.model';

@Injectable({
  providedIn: 'root'
})
export class CohorteService {

  private apiUrl = `${URL_SERVER}/cohorte`;

  constructor(private http: HttpClient) {}

  getCohortes(): Observable<Cohorte[]> {
    return this.http.get<Cohorte[]>(this.apiUrl);
  }
}
