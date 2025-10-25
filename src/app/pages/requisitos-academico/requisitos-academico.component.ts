import { Component } from '@angular/core';
import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from "../../components/footer-tec/footer-tec.component";
import { FooterGobComponent } from "../../components/footer-gob/footer-gob.component";

@Component({
  selector: 'app-requisitos-academico',
  imports: [NavbarGobComponent, LogosComponent, NavbarTecComponent, FooterTecComponent, FooterGobComponent],
  templateUrl: './requisitos-academico.component.html',
  styleUrl: './requisitos-academico.component.css'
})
export class RequisitosAcademicoComponent {

}
