import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R67Component } from './r67.component';

describe('R67Component', () => {
  let component: R67Component;
  let fixture: ComponentFixture<R67Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R67Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
