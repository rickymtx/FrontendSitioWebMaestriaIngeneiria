import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

@Injectable({
  providedIn: 'root'
})
export class PerfilDeseableService {

  private apiUrl = `${URL_SERVER}/perfil-deseable`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
