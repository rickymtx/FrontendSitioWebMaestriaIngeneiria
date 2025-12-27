import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contacto } from './contacto.model';
import { URL_SERVER } from '../../config/server.config';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private baseUrl = URL_SERVER;
  private endpoint = `${this.baseUrl}/contacto`;

  constructor(private http: HttpClient) {}

  /**
   * Obtener lista de contactos (vista pública)
   */
  getContactos(): Observable<Contacto[]> {
    return this.http
      .get<Contacto[]>(this.endpoint)
      .pipe(catchError(this.handleError));
  }

  /**
   * Manejo centralizado de errores
   */
  private handleError(error: HttpErrorResponse) {
    console.error('Error al consumir Contacto (Frontend):', error);
    return throwError(() => new Error(
      'No se pudo cargar la información de contacto. Intente más tarde.'
    ));
  }
}
