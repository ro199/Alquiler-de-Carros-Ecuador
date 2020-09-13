import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAdminInfoComponent } from './ruta-admin-info.component';

describe('RutaAdminInfoComponent', () => {
  let component: RutaAdminInfoComponent;
  let fixture: ComponentFixture<RutaAdminInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAdminInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAdminInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
