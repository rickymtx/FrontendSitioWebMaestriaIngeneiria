import { Component } from '@angular/core';
import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from "../../components/footer-tec/footer-tec.component";
import { FooterGobComponent } from "../../components/footer-gob/footer-gob.component";

@Component({
  selector: 'app-lgyac',
  imports: [NavbarGobComponent, LogosComponent, NavbarTecComponent, FooterTecComponent, FooterGobComponent],
  templateUrl: './lgyac.component.html',
  styleUrl: './lgyac.component.css'
})
export class LgyacComponent {

}
