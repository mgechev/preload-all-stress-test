import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R267Component } from './r267.component';

describe('R267Component', () => {
  let component: R267Component;
  let fixture: ComponentFixture<R267Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R267Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
