import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGobComponent } from './navbar-gob.component';

describe('NavbarGobComponent', () => {
  let component: NavbarGobComponent;
  let fixture: ComponentFixture<NavbarGobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarGobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarGobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
