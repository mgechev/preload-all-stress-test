import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R276Component } from './r276.component';

describe('R276Component', () => {
  let component: R276Component;
  let fixture: ComponentFixture<R276Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R276Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
