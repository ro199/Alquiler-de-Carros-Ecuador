import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaClienteAlquilerComponent } from './ruta-cliente-alquiler.component';

describe('RutaClienteAlquilerComponent', () => {
  let component: RutaClienteAlquilerComponent;
  let fixture: ComponentFixture<RutaClienteAlquilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaClienteAlquilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaClienteAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
