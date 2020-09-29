import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaAutoCardComponent } from './oferta-auto-card.component';

describe('OfertaAutoCardComponent', () => {
  let component: OfertaAutoCardComponent;
  let fixture: ComponentFixture<OfertaAutoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaAutoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaAutoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
