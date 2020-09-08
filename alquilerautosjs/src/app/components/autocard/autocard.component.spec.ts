import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocardComponent } from './autocard.component';

describe('AutocardComponent', () => {
  let component: AutocardComponent;
  let fixture: ComponentFixture<AutocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
