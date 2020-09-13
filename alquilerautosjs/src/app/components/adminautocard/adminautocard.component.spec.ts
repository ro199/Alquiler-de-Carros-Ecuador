import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminautocardComponent } from './adminautocard.component';

describe('AdminautocardComponent', () => {
  let component: AdminautocardComponent;
  let fixture: ComponentFixture<AdminautocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminautocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminautocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
