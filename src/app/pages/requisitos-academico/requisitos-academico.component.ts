import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from '../../components/footer-tec/footer-tec.component';
import { FooterGobComponent } from '../../components/footer-gob/footer-gob.component';

import { RequisitosGradoService, RequisitoGrado } from './requisitos-academico.service';

@Component({
  selector: 'app-requisitos-academico',
  standalone: true,
  imports: [
    CommonModule,
    NavbarGobComponent,
    LogosComponent,
    NavbarTecComponent,
    FooterTecComponent,
    FooterGobComponent
  ],
  templateUrl: './requisitos-academico.component.html',
  styleUrl: './requisitos-academico.component.css'
})
export class RequisitosAcademicoComponent implements OnInit {

  requisitos: RequisitoGrado[] = [];

  constructor(private requisitosService: RequisitosGradoService) {}

  ngOnInit(): void {
    this.cargarRequisitos();
  }

  cargarRequisitos(): void {
    this.requisitosService.getAll().subscribe({
      next: (data) => this.requisitos = data,
      error: (err) => console.error('Error al cargar requisitos de grado:', err)
    });
  }
}
