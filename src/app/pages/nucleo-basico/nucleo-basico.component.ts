import { Component } from '@angular/core';
import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from "../../components/footer-tec/footer-tec.component";
import { FooterGobComponent } from "../../components/footer-gob/footer-gob.component";

@Component({
  selector: 'app-nucleo-basico',
  imports: [NavbarGobComponent, LogosComponent, NavbarTecComponent, FooterTecComponent, FooterGobComponent],
  templateUrl: './nucleo-basico.component.html',
  styleUrl: './nucleo-basico.component.css'
})
export class NucleoBasicoComponent {
  ocultos: boolean[] = [true, true];

  toggleDetalles(i: number) {
    this.ocultos[i] = !this.ocultos[i];
  }
}
