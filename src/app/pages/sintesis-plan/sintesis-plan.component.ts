import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from '../../components/footer-tec/footer-tec.component';
import { FooterGobComponent } from '../../components/footer-gob/footer-gob.component';

import {
  OrientacionProfesionalService,
  OrientacionProfesional
} from './orientacion-profesional.service';

import {
  DistribucionAsignaturasService,
  DistribucionAsignatura
} from './distribucion-asignaturas.service';

import {
  AsignaturasBasicasService,
  AsignaturaBasica
} from './asignaturas-basicas.service';

import {
  AsignaturasOptativasService,
  AsignaturaOptativa
} from './asignaturas-optativas.service';

import { MapaCurricularService, MapaCurricular } from './mapa-curricular.service';

@Component({
  selector: 'app-sintesis-plan',
  standalone: true,
  imports: [
    CommonModule,
    NavbarGobComponent,
    LogosComponent,
    NavbarTecComponent,
    FooterTecComponent,
    FooterGobComponent
  ],
  templateUrl: './sintesis-plan.component.html',
  styleUrls: ['./sintesis-plan.component.css']
})
export class SintesisPlanComponent {

  orientacionProfesional$: Observable<OrientacionProfesional[]>;
  distribucionAsignaturas$: Observable<DistribucionAsignatura[]>;
  asignaturasBasicas$: Observable<AsignaturaBasica[]>;
  asignaturasOptativas$: Observable<AsignaturaOptativa[]>;
  mapaCurricular$: Observable<MapaCurricular>;

  constructor(
    private orientacionService: OrientacionProfesionalService,
    private distribucionService: DistribucionAsignaturasService,
    private basicasService: AsignaturasBasicasService,
    private optativasService: AsignaturasOptativasService,
    private mapaService: MapaCurricularService
  ) {
    this.orientacionProfesional$ = this.orientacionService.getAll();
    this.distribucionAsignaturas$ = this.distribucionService.getAll();
    this.asignaturasBasicas$ = this.basicasService.getAll();
    this.asignaturasOptativas$ = this.optativasService.getAll();
    this.mapaCurricular$ = this.mapaService.obtenerMapa();
  }
}
