import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaClienteInfoComponent } from './ruta-cliente-info.component';

describe('RutaClienteInfoComponent', () => {
  let component: RutaClienteInfoComponent;
  let fixture: ComponentFixture<RutaClienteInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaClienteInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaClienteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
