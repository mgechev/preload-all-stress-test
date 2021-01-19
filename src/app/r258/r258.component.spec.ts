import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R258Component } from './r258.component';

describe('R258Component', () => {
  let component: R258Component;
  let fixture: ComponentFixture<R258Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R258Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
