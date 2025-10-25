import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitosAcademicoComponent } from './requisitos-academico.component';

describe('RequisitosAcademicoComponent', () => {
  let component: RequisitosAcademicoComponent;
  let fixture: ComponentFixture<RequisitosAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequisitosAcademicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisitosAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
