import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTecComponent } from './navbar-tec.component';

describe('NavbarTecComponent', () => {
  let component: NavbarTecComponent;
  let fixture: ComponentFixture<NavbarTecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarTecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
