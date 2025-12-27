import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from '../../components/footer-tec/footer-tec.component';
import { FooterGobComponent } from '../../components/footer-gob/footer-gob.component';

import { ContactoService } from './contacto.service';
import { Contacto } from './contacto.model';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    NavbarGobComponent,
    LogosComponent,
    NavbarTecComponent,
    FooterTecComponent,
    FooterGobComponent
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {

  contactos: Contacto[] = [];
  cargando = true;
  error = false;

  constructor(private contactoService: ContactoService) {}

  ngOnInit(): void {
    this.cargarContactos();
  }

  cargarContactos(): void {
    this.contactoService.getContactos().subscribe({
      next: (data) => {
        this.contactos = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar contactos:', err);
        this.error = true;
        this.cargando = false;
      }
    });
  }
}
