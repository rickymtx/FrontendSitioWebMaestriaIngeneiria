import { Component, OnInit } from '@angular/core';

// Componentes visuales
import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from "../../components/footer-tec/footer-tec.component";
import { FooterGobComponent } from "../../components/footer-gob/footer-gob.component";

// Servicios
import { CuerposAcademicosService } from './cuerpos-academicos.service';
import { SistemaNacionalService } from './sistema-nacional.service';
import { PerfilDeseableService } from './perfil-deseable.service';
import { OtrosReconocimientosService } from './otros-reconocimientos.service';
import { ConveniosFirmadosService } from './convenios-firmados.service';
import { ParticipacionRedesService } from './participacion-redes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productividad',
  standalone: true,
  imports: [
    CommonModule,
    NavbarGobComponent,
    LogosComponent,
    NavbarTecComponent,
    FooterTecComponent,
    FooterGobComponent
  ],
  templateUrl: './productividad.component.html',
  styleUrl: './productividad.component.css'
})
export class ProductividadComponent implements OnInit {

  // ===== Datos para mostrar en el FRONTEND =====
  cuerposAcademicos: any[] = [];
  sistemaNacional: any[] = [];
  perfilDeseable: any[] = [];
  otrosReconocimientos: any[] = [];
  conveniosFirmados: any[] = [];
  participacionRedes: any[] = [];

  constructor(
    private cuerposService: CuerposAcademicosService,
    private sistemaService: SistemaNacionalService,
    private perfilService: PerfilDeseableService,
    private otrosService: OtrosReconocimientosService,
    private conveniosService: ConveniosFirmadosService,
    private participacionService: ParticipacionRedesService
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  // ===== GET: Cargar toda la información =====
  cargarDatos(): void {
    this.cuerposService.getAll().subscribe(data => {
      this.cuerposAcademicos = data;
    });

    this.sistemaService.getAll().subscribe(data => {
      this.sistemaNacional = data;
    });

    this.perfilService.getAll().subscribe(data => {
      this.perfilDeseable = data;
    });

    this.otrosService.getAll().subscribe(data => {
      this.otrosReconocimientos = data;
    });

    this.conveniosService.getAll().subscribe(data => {
      this.conveniosFirmados = data;
    });

    this.participacionService.getAll().subscribe(data => {
      this.participacionRedes = data;
    });
  }
}
