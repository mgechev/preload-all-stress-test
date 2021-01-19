import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R405Component } from './r405.component';

describe('R405Component', () => {
  let component: R405Component;
  let fixture: ComponentFixture<R405Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R405Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R405Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
