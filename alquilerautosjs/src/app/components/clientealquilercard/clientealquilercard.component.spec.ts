import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientealquilercardComponent } from './clientealquilercard.component';

describe('ClientealquilercardComponent', () => {
  let component: ClientealquilercardComponent;
  let fixture: ComponentFixture<ClientealquilercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientealquilercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientealquilercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
