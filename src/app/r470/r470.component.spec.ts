import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R470Component } from './r470.component';

describe('R470Component', () => {
  let component: R470Component;
  let fixture: ComponentFixture<R470Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R470Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
