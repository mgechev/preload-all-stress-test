import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R383Component } from './r383.component';

describe('R383Component', () => {
  let component: R383Component;
  let fixture: ComponentFixture<R383Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R383Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R383Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
