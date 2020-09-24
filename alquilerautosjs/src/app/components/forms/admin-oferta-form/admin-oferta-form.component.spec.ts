import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOfertaFormComponent } from './admin-oferta-form.component';

describe('AdminOfertaFormComponent', () => {
  let component: AdminOfertaFormComponent;
  let fixture: ComponentFixture<AdminOfertaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOfertaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOfertaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
