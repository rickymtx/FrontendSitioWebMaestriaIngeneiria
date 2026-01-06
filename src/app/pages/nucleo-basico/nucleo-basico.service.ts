import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVER } from '../../config/server.config';

export interface CvuEnlace {
    id: number;
    enlace: string;
}

export interface NucleoBasico {
    id: number;
    nombre: string;
    especialidad: string;

    grado_maximo: string;
    cedula_profesional: string;
    nivel_snii: string;
    cargo: string;
    unidad_adscripcion: string;
    correo: string;
    semblanza: string;
    lineas_investigacion: string;

    imagen: string | null;
    cvu_enlaces: CvuEnlace[];
}

@Injectable({
    providedIn: 'root'
})
export class NucleoBasicoService {

    private baseUrl = URL_SERVER;
    private endpoint = `${this.baseUrl}/nucleo-basico`;

    constructor(private http: HttpClient) { }

    getNucleoBasico(): Observable<NucleoBasico[]> {
        return this.http.get<NucleoBasico[]>(this.endpoint);
    }
}