import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainFormComponent } from './home-main-form.component';

describe('HomeMainFormComponent', () => {
  let component: HomeMainFormComponent;
  let fixture: ComponentFixture<HomeMainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
