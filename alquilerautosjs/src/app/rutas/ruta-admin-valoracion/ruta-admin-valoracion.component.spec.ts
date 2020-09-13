import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAdminValoracionComponent } from './ruta-admin-valoracion.component';

describe('RutaAdminValoracionComponent', () => {
  let component: RutaAdminValoracionComponent;
  let fixture: ComponentFixture<RutaAdminValoracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAdminValoracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAdminValoracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
