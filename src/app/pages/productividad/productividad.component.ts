import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// ===== Componentes visuales =====
import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from "../../components/footer-tec/footer-tec.component";
import { FooterGobComponent } from "../../components/footer-gob/footer-gob.component";

// ===== Servicios generales =====
import { CuerposAcademicosService } from './cuerpos-academicos.service';
import { SistemaNacionalService } from './sistema-nacional.service';
import { PerfilDeseableService } from './perfil-deseable.service';
import { OtrosReconocimientosService } from './otros-reconocimientos.service';
import { ConveniosFirmadosService } from './convenios-firmados.service';
import { ParticipacionRedesService } from './participacion-redes.service';

// ===== Servicios LGAC =====
// Artículos
import { LgacArticulosService } from './lgac-articulos.service';
import { LgacArticulos2Service } from './lgac-articulos2.service';
import { LgacArticulos3Service } from './lgac-articulos3.service';
import { LgacArticulos4Service } from './lgac-articulos4.service';

// Capítulos
import { LgacCapitulosService } from './lgac-capitulos.service';
import { LgacCapitulos2Service } from './lgac-capitulos2.service';
import { LgacCapitulos3Service } from './lgac-capitulos3.service';
import { LgacCapitulos4Service } from './lgac-capitulos4.service';

// Proyectos
import { LgacProyectosService } from './lgac-proyectos.service';
import { LgacProyectos2Service } from './lgac-proyectos2.service';
import { LgacProyectos3Service } from './lgac-proyectos3.service';
import { LgacProyectos4Service } from './lgac-proyectos4.service';

// ======================================================
// INTERFACE (FUERA DE LA CLASE)
// ======================================================
interface LgacBloque {
  titulo: string;
  articulos: any[];
  capitulos: any[];
  proyectos: any[];
}

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

  // ===== LGAC =====
  lgacs: LgacBloque[] = [];

  // ===== Datos generales =====
  cuerposAcademicos: any[] = [];
  sistemaNacional: any[] = [];
  perfilDeseable: any[] = [];
  otrosReconocimientos: any[] = [];
  conveniosFirmados: any[] = [];
  participacionRedes: any[] = [];

  constructor(
    // Generales
    private cuerposService: CuerposAcademicosService,
    private sistemaService: SistemaNacionalService,
    private perfilService: PerfilDeseableService,
    private otrosService: OtrosReconocimientosService,
    private conveniosService: ConveniosFirmadosService,
    private participacionService: ParticipacionRedesService,

    // Artículos
    private articulosService: LgacArticulosService,
    private articulos2Service: LgacArticulos2Service,
    private articulos3Service: LgacArticulos3Service,
    private articulos4Service: LgacArticulos4Service,

    // Capítulos
    private capitulosService: LgacCapitulosService,
    private capitulos2Service: LgacCapitulos2Service,
    private capitulos3Service: LgacCapitulos3Service,
    private capitulos4Service: LgacCapitulos4Service,

    // Proyectos
    private proyectosService: LgacProyectosService,
    private proyectos2Service: LgacProyectos2Service,
    private proyectos3Service: LgacProyectos3Service,
    private proyectos4Service: LgacProyectos4Service
  ) {}

  // ======================================================
  // CICLO DE VIDA
  // ======================================================
  ngOnInit(): void {
    this.cargarDatosGenerales();
    this.cargarLgac();
  }

  // ======================================================
  // MÉTODOS
  // ======================================================
  abrirUrl(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  cargarDatosGenerales(): void {
    this.cuerposService.getAll().subscribe(d => this.cuerposAcademicos = d);
    this.sistemaService.getAll().subscribe(d => this.sistemaNacional = d);
    this.perfilService.getAll().subscribe(d => this.perfilDeseable = d);
    this.otrosService.getAll().subscribe(d => this.otrosReconocimientos = d);
    this.conveniosService.getAll().subscribe(d => this.conveniosFirmados = d);
    this.participacionService.getAll().subscribe(d => this.participacionRedes = d);
  }

  cargarLgac(): void {

    this.lgacs = [
      { titulo: 'LGAC: Ingeniería en Sistemas', articulos: [], capitulos: [], proyectos: [] },
      { titulo: 'LGAC: Instrumentación y Bioelectrónica', articulos: [], capitulos: [], proyectos: [] },
      { titulo: 'LGAC: Desarrollo y Gestión de Proyectos de Ingeniería para el Desarrollo Regional', articulos: [], capitulos: [], proyectos: [] },
      { titulo: 'LGAC: Desarrollo de Tecnología e Innovación', articulos: [], capitulos: [], proyectos: [] }
    ];

    // LGAC 1
    this.articulosService.getArticulos().subscribe(d => this.lgacs[0].articulos = d);
    this.capitulosService.getCapitulos().subscribe(d => this.lgacs[0].capitulos = d);
    this.proyectosService.getProyectos().subscribe(d => this.lgacs[0].proyectos = d);

    // LGAC 2
    this.articulos2Service.getArticulos().subscribe(d => this.lgacs[1].articulos = d);
    this.capitulos2Service.getCapitulos().subscribe(d => this.lgacs[1].capitulos = d);
    this.proyectos2Service.getProyectos().subscribe(d => this.lgacs[1].proyectos = d);

    // LGAC 3
    this.articulos3Service.getArticulos().subscribe(d => this.lgacs[2].articulos = d);
    this.capitulos3Service.getCapitulos().subscribe(d => this.lgacs[2].capitulos = d);
    this.proyectos3Service.getProyectos().subscribe(d => this.lgacs[2].proyectos = d);

    // LGAC 4
    this.articulos4Service.getArticulos().subscribe(d => this.lgacs[3].articulos = d);
    this.capitulos4Service.getCapitulos().subscribe(d => this.lgacs[3].capitulos = d);
    this.proyectos4Service.getProyectos().subscribe(d => this.lgacs[3].proyectos = d);
  }
}
