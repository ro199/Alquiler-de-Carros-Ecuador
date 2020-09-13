import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminalquilerComponent } from './adminalquiler.component';

describe('AdminalquilerComponent', () => {
  let component: AdminalquilerComponent;
  let fixture: ComponentFixture<AdminalquilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminalquilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminalquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
