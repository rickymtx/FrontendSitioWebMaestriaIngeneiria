import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface Carrusel {
  id_carrusel: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  private apiUrl = `${URL_SERVER}/carrusel`;

  constructor(private http: HttpClient) {}

  getCarrusel(): Observable<Carrusel[]> {
    return this.http.get<Carrusel[]>(this.apiUrl);
  }
}