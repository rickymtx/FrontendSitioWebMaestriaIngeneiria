import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent {

  constructor(private router: Router) { }

  rutasInternas: { [key: string]: string } = {
    "inicio": "/home",
    "presentacion del programa": "/presentacion",
    "presentacion programa": "/presentacion",
    "presentacion": "/presentacion",
    "objetivos": "/objetivos",
    "mision y vision": "/misionVision",
    "mision": "/misionVision",
    "vision": "/misionVision",
    "estado del arte": "/estadoArte",
    "estado arte": "/estadoArte",
    "infraestructura cientifica": "/infraestructura",
    "infraestructura": "/infraestructura",
    "nucleo academico basico": "/nucleoBasico",
    "nucleo academico": "/nucleoBasico",
    "nucleo basico": "/nucleoBasico",
    "nucleo": "/nucleoBasico",
    "lgyac": "/lgyac",
    "lgac": "/lgyac",
    "localizacion": "/localizacion",
    "localizacion del programa": "/localizacion",
    "sintesis del plan de estudios": "/sintesisPlan",
    "sintesis": "/sintesisPlan",
    "perfil de ingreso y egreso": "/ingresoEgreso",
    "perfil de ingreso": "/ingresoEgreso",
    "perfil de egreso": "/ingresoEgreso",
    "requisitos de ingreso": "/requisitosIngreso",
    "requisitos ingreso": "/requisitosIngreso",
    "requisitos de permanencia": "/requisitosPermanencia",
    "requisitos permanencia": "/requisitosPermanencia",
    "requisitos de grado academico": "/requisitosAcademico",
    "requisitos de grado": "/requisitosAcademico",
    "requisitos grado": "/requisitosAcademico",
    "productividad": "/productividad",
    "egresados": "/egresados",
    "cohorte generacional": "/cohorte",
    "cohorte": "/cohorte",
    "contacto": "/contacto"
  };

  // Método que se ejecuta al presionar Enter
  onSearchKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();

      const input = event.target as HTMLInputElement;
      const query = input.value.trim().toLowerCase();

      if (query !== "") {
        if (this.rutasInternas.hasOwnProperty(query)) {
          this.router.navigate([this.rutasInternas[query]]);

        } else {

          window.open(
            `https://www.itdurango.edu.mx/?q=${encodeURIComponent(query)}`,
            "_blank"
          );
        }
      }
    }
  }
}
