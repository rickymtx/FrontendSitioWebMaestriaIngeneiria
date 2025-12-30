import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

@Injectable({
  providedIn: 'root'
})
export class EgresadosService {

  private apiUrl = `${URL_SERVER}/egresados`;

  constructor(private http: HttpClient) {}

  getEgresados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
