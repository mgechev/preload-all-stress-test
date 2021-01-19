import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R380Component } from './r380.component';

describe('R380Component', () => {
  let component: R380Component;
  let fixture: ComponentFixture<R380Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R380Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
