import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from '../../components/footer-tec/footer-tec.component';
import { FooterGobComponent } from '../../components/footer-gob/footer-gob.component';

import { CohorteService } from './cohorte.service';
import { Cohorte } from './cohorte.model';
import { URL_SERVER } from '../../config/server.config';

@Component({
  selector: 'app-cohorte',
  standalone: true,
  imports: [
    CommonModule,
    NavbarGobComponent,
    LogosComponent,
    NavbarTecComponent,
    FooterTecComponent,
    FooterGobComponent
  ],
  templateUrl: './cohorte.component.html',
  styleUrl: './cohorte.component.css'
})
export class CohorteComponent implements OnInit {

  cohortes: Cohorte[] = [];
  urlServer = URL_SERVER;
  loading = true;
  errorMsg = '';

  constructor(private cohorteService: CohorteService) {}

  ngOnInit(): void {
    this.cargarCohortes();
  }

  cargarCohortes(): void {
    this.cohorteService.getCohortes().subscribe({
      next: (data) => {
        this.cohortes = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar cohortes:', error);
        this.errorMsg = 'No se pudo cargar la información';
        this.loading = false;
      }
    });
  }
}
