import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoArteComponent } from './estado-arte.component';

describe('EstadoArteComponent', () => {
  let component: EstadoArteComponent;
  let fixture: ComponentFixture<EstadoArteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoArteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoArteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
