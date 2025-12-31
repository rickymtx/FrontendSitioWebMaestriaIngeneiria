import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from '../../components/footer-tec/footer-tec.component';
import { FooterGobComponent } from '../../components/footer-gob/footer-gob.component';

import { RequisitosPermanenciaService, RequisitoPermanencia } from './requisitos-permanencia.service';

@Component({
  selector: 'app-requisitos-permanencia',
  standalone: true,
  imports: [
    CommonModule,
    NavbarGobComponent,
    LogosComponent,
    NavbarTecComponent,
    FooterTecComponent,
    FooterGobComponent
  ],
  templateUrl: './requisitos-permanencia.component.html',
  styleUrl: './requisitos-permanencia.component.css'
})
export class RequisitosPermanenciaComponent implements OnInit {

  requisitos: RequisitoPermanencia[] = [];

  constructor(private requisitosService: RequisitosPermanenciaService) {}

  ngOnInit(): void {
    this.cargarRequisitos();
  }

  cargarRequisitos(): void {
    this.requisitosService.getAll().subscribe({
      next: (data) => this.requisitos = data,
      error: (err) => console.error('Error al cargar requisitos:', err)
    });
  }
}
