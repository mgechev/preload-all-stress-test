import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R338Component } from './r338.component';

describe('R338Component', () => {
  let component: R338Component;
  let fixture: ComponentFixture<R338Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R338Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
