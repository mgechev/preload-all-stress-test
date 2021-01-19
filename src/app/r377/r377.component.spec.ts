import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R377Component } from './r377.component';

describe('R377Component', () => {
  let component: R377Component;
  let fixture: ComponentFixture<R377Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R377Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
