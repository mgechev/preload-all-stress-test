import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R430Component } from './r430.component';

describe('R430Component', () => {
  let component: R430Component;
  let fixture: ComponentFixture<R430Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R430Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R430Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
