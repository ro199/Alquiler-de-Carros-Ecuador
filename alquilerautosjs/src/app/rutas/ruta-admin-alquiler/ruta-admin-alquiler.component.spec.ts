import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAdminAlquilerComponent } from './ruta-admin-alquiler.component';

describe('RutaAdminAlquilerComponent', () => {
  let component: RutaAdminAlquilerComponent;
  let fixture: ComponentFixture<RutaAdminAlquilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAdminAlquilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAdminAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
