import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R296Component } from './r296.component';

describe('R296Component', () => {
  let component: R296Component;
  let fixture: ComponentFixture<R296Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R296Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
