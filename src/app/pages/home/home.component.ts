import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, ViewChild, ElementRef } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from "../../components/footer-tec/footer-tec.component";
import { FooterGobComponent } from "../../components/footer-gob/footer-gob.component";

import { CarruselService } from './carrusel.service';
import { EventosService, Evento } from './eventos.service';
import { PodcastService, Podcast } from './podcast.service';
import { PortadaService, Portada } from './portada.service';
import { GaleriaService, Galeria } from './galeria.service';
import { URL_SERVER } from '../../config/server.config';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarGobComponent,
    LogosComponent,
    NavbarTecComponent,
    FooterTecComponent,
    FooterGobComponent,
    SafeUrlPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  urlServer: string = URL_SERVER;

  @ViewChild('carouselSlide') carouselSlide!: ElementRef<HTMLElement>;

  carrusel: any[] = [];
  eventos: Evento[] = [];
  podcasts: Podcast[] = [];
  portada: Portada | null = null;
  galeria: Galeria[] = [];

  currentIndex = 0;
  autoSlideInterval: any;

  ngAfterViewInit(): void {
    this.updateSlidePosition();

    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide() {
    const slide = document.getElementById("carousel-slide");
    if (!slide) return;

    const totalSlides = slide.children.length;

    this.currentIndex++;

    if (this.currentIndex >= totalSlides) {
      this.currentIndex = 0;
    }

    this.updateSlidePosition();
  }

  updateSlidePosition() {
    const slide = document.getElementById("carousel-slide");
    if (!slide) return;

    slide.style.transform = `translateX(-${this.currentIndex * 100}vw)`;
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private carruselService: CarruselService,
    private eventosService: EventosService,
    private podcastService: PodcastService,
    private portadaService: PortadaService,
    private galeriaService: GaleriaService
  ) { }

  ngOnInit(): void {
    this.cargarCarrusel();
    this.cargarEventos();
    this.cargarPodcasts();
    this.cargarPortada();
    this.cargarGaleria();
  }

  cargarCarrusel(): void {
    this.carruselService.getCarrusel().subscribe({
      next: (data) => {
        this.carrusel = data;
        setTimeout(() => this.updateSlidePosition(), 0);
      },
      error: err => console.error('Error carrusel:', err)
    });
  }

  cargarEventos(): void {
    this.eventosService.getEventos().subscribe({
      next: data => this.eventos = data,
      error: err => console.error('Error eventos:', err)
    });
  }

  cargarPodcasts(): void {
    this.podcastService.getPodcasts().subscribe({
      next: data => this.podcasts = data,
      error: err => console.error('Error podcasts:', err)
    });
  }

  cargarPortada(): void {
    this.portadaService.getPortadas().subscribe({
      next: data => {
        if (data.length > 0) {
          this.portada = data[0];
        }
      },
      error: err => console.error('Error portada:', err)
    });
  }

  cargarGaleria(): void {
    this.galeriaService.getGaleria().subscribe({
      next: data => this.galeria = data,
      error: err => console.error('Error galería:', err)
    });
  }
}