import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortafolioComponent } from './admin-portafolio.component';

describe('AdminPortafolioComponent', () => {
  let component: AdminPortafolioComponent;
  let fixture: ComponentFixture<AdminPortafolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPortafolioComponent]
    });
    fixture = TestBed.createComponent(AdminPortafolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
