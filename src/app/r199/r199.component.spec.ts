import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R199Component } from './r199.component';

describe('R199Component', () => {
  let component: R199Component;
  let fixture: ComponentFixture<R199Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R199Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R199Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
