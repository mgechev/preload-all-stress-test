import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R20Component } from './r20.component';

describe('R20Component', () => {
  let component: R20Component;
  let fixture: ComponentFixture<R20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
