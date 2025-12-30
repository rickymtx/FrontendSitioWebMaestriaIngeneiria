import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from '../../components/footer-tec/footer-tec.component';
import { FooterGobComponent } from '../../components/footer-gob/footer-gob.component';

import { LgyacService, Lgyac } from './lgyac.service';

@Component({
  selector: 'app-lgyac',
  standalone: true,
  imports: [
    CommonModule,
    NavbarGobComponent,
    LogosComponent,
    NavbarTecComponent,
    FooterTecComponent,
    FooterGobComponent
  ],
  templateUrl: './lgyac.component.html',
  styleUrl: './lgyac.component.css'
})
export class LgyacComponent implements OnInit {

  lgyacList: Lgyac[] = [];

  constructor(private lgyacService: LgyacService) {}

  ngOnInit(): void {
    this.cargarLGYAC();
  }

  cargarLGYAC(): void {
    this.lgyacService.getAll().subscribe({
      next: (data) => {
        this.lgyacList = data;
      },
      error: (error) => {
        console.error('Error al cargar LGyAC:', error);
      }
    });
  }
}
