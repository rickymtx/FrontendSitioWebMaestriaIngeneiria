import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from '../../components/footer-tec/footer-tec.component';
import { FooterGobComponent } from '../../components/footer-gob/footer-gob.component';

import {
  RequisitosIngresoService,
  RequisitoIngreso
} from './requisitos-ingreso.service';

@Component({
  selector: 'app-requisitos-ingreso',
  standalone: true,
  imports: [
    CommonModule,
    NavbarGobComponent,
    LogosComponent,
    NavbarTecComponent,
    FooterTecComponent,
    FooterGobComponent
  ],
  templateUrl: './requisitos-ingreso.component.html',
  styleUrl: './requisitos-ingreso.component.css'
})
export class RequisitosIngresoComponent implements OnInit {

  antecedentes: RequisitoIngreso[] = [];
  requisitos: RequisitoIngreso[] = [];
  seleccion: RequisitoIngreso[] = [];
  urls: RequisitoIngreso[] = [];

  constructor(private requisitosService: RequisitosIngresoService) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.requisitosService.getAll().subscribe({
      next: (data) => {
        this.antecedentes = data.filter(d => d.categoria === 'antecedentes');
        this.requisitos   = data.filter(d => d.categoria === 'requisitos');
        this.seleccion    = data.filter(d => d.categoria === 'seleccion');
        this.urls         = data.filter(d => d.categoria === 'URLs');
      },
      error: (err) => {
        console.error('Error al cargar requisitos', err);
      }
    });
  }
}
