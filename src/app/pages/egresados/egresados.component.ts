import { Component, OnInit } from '@angular/core';

import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from '../../components/footer-tec/footer-tec.component';
import { FooterGobComponent } from "../../components/footer-gob/footer-gob.component";

import { CommonModule } from '@angular/common';
import { EgresadosService } from './egresados.service';
import { URL_SERVER } from '../../config/server.config';

@Component({
  selector: 'app-egresados',
  standalone: true,
  imports: [
    CommonModule,
    NavbarGobComponent,
    LogosComponent,
    NavbarTecComponent,
    FooterTecComponent,
    FooterGobComponent
  ],
  templateUrl: './egresados.component.html',
  styleUrl: './egresados.component.css'
})
export class EgresadosComponent implements OnInit {

  egresado: any = null;
  loading = true;
  errorMsg = '';

  urlServer = URL_SERVER;

  constructor(private egresadosService: EgresadosService) {}

  ngOnInit(): void {
    this.egresadosService.getEgresados().subscribe({
      next: (data) => {
        this.egresado = data?.[0] || null;
        this.loading = false;
      },
      error: () => {
        this.errorMsg = 'No se pudo cargar la información de egresados.';
        this.loading = false;
      }
    });
  }
}
