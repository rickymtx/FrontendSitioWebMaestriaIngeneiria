import { Component, OnInit } from '@angular/core';
import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from "../../components/footer-tec/footer-tec.component";
import { FooterGobComponent } from "../../components/footer-gob/footer-gob.component";

import { NucleoBasicoService, NucleoBasico } from './nucleo-basico.service';
import { URL_SERVER } from '../../config/server.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nucleo-basico',
  standalone: true,
  imports: [
    CommonModule,
    NavbarGobComponent,
    LogosComponent,
    NavbarTecComponent,
    FooterTecComponent,
    FooterGobComponent
  ],
  templateUrl: './nucleo-basico.component.html',
  styleUrl: './nucleo-basico.component.css'
})
export class NucleoBasicoComponent implements OnInit {

  urlServer = URL_SERVER;

  nucleoBasico: NucleoBasico[] = [];

  ocultos: boolean[] = [];

  cargando = true;

  constructor(private nucleoBasicoService: NucleoBasicoService) {}

  ngOnInit(): void {
    this.cargarNucleoBasico();
  }

  cargarNucleoBasico(): void {
    this.nucleoBasicoService.getNucleoBasico().subscribe({
      next: (data) => {
        this.nucleoBasico = data;
        this.ocultos = Array(this.nucleoBasico.length).fill(true);
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar Núcleo Académico Básico:', err);
        this.cargando = false;
      }
    });
  }

  toggleDetalles(index: number): void {
    this.ocultos[index] = !this.ocultos[index];
  }

  getImagen(imagen: string | null): string {
    return imagen
      ? `${this.urlServer}/${imagen}`
      : 'assets/sin-foto.png';
  }
}