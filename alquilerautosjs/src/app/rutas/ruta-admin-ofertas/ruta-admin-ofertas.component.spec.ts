import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAdminOfertasComponent } from './ruta-admin-ofertas.component';

describe('RutaAdminOfertasComponent', () => {
  let component: RutaAdminOfertasComponent;
  let fixture: ComponentFixture<RutaAdminOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAdminOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAdminOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
