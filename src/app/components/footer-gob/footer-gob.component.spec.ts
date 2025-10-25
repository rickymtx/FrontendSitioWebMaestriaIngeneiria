import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGobComponent } from './footer-gob.component';

describe('FooterGobComponent', () => {
  let component: FooterGobComponent;
  let fixture: ComponentFixture<FooterGobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterGobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterGobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
