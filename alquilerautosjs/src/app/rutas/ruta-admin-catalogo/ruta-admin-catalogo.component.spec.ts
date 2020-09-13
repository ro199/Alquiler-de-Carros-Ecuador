import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAdminCatalogoComponent } from './ruta-admin-catalogo.component';

describe('RutaAdminCatalogoComponent', () => {
  let component: RutaAdminCatalogoComponent;
  let fixture: ComponentFixture<RutaAdminCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAdminCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAdminCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
