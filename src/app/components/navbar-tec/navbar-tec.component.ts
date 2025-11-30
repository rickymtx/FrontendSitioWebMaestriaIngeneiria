import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar-tec',
  templateUrl: './navbar-tec.component.html',
  styleUrls: ['./navbar-tec.component.css']
})
export class NavbarTecComponent implements AfterViewInit {

  private navbarMaestria!: HTMLElement | null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.navbarMaestria = this.el.nativeElement.querySelector('.navbarMaestria');
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.navbarMaestria) return;

    const scrolled = window.scrollY > 70;

    if (window.innerWidth > 768) {
      if (scrolled) {
        this.navbarMaestria.classList.add('fixed-navbar');
      } else {
        this.navbarMaestria.classList.remove('fixed-navbar');
      }
    } else {
      this.navbarMaestria.classList.remove('fixed-navbar');
    }
  }
}
