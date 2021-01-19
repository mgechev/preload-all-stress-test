import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R306Component } from './r306.component';

describe('R306Component', () => {
  let component: R306Component;
  let fixture: ComponentFixture<R306Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R306Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
