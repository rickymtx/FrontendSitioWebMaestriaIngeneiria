import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

@Injectable({
  providedIn: 'root'
})
export class SistemaNacionalService {

  private apiUrl = `${URL_SERVER}/sistema-nacional`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}