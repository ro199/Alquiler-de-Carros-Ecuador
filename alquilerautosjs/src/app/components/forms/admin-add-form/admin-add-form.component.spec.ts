import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddFormComponent } from './admin-add-form.component';

describe('AdminAddFormComponent', () => {
  let component: AdminAddFormComponent;
  let fixture: ComponentFixture<AdminAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
