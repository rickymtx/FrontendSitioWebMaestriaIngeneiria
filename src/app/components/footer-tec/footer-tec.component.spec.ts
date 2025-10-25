import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTecComponent } from './footer-tec.component';

describe('FooterTecComponent', () => {
  let component: FooterTecComponent;
  let fixture: ComponentFixture<FooterTecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterTecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
