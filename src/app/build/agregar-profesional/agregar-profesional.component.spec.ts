import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProfesionalComponent } from './agregar-profesional.component';

describe('AgregarProfesionalComponent', () => {
  let component: AgregarProfesionalComponent;
  let fixture: ComponentFixture<AgregarProfesionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarProfesionalComponent]
    });
    fixture = TestBed.createComponent(AgregarProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
