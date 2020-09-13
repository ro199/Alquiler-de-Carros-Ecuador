import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminvaloracionComponent } from './adminvaloracion.component';

describe('AdminvaloracionComponent', () => {
  let component: AdminvaloracionComponent;
  let fixture: ComponentFixture<AdminvaloracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminvaloracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminvaloracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
