import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminofertacardComponent } from './adminofertacard.component';

describe('AdminofertacardComponent', () => {
  let component: AdminofertacardComponent;
  let fixture: ComponentFixture<AdminofertacardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminofertacardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminofertacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
