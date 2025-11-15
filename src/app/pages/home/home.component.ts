import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { NavbarGobComponent } from '../../components/navbar-gob/navbar-gob.component';
import { LogosComponent } from '../../components/logos/logos.component';
import { NavbarTecComponent } from '../../components/navbar-tec/navbar-tec.component';
import { FooterTecComponent } from "../../components/footer-tec/footer-tec.component";
import { FooterGobComponent } from "../../components/footer-gob/footer-gob.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NavbarGobComponent, LogosComponent, NavbarTecComponent, FooterTecComponent, FooterGobComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {

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
}
