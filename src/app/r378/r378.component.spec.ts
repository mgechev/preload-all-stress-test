import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R378Component } from './r378.component';

describe('R378Component', () => {
  let component: R378Component;
  let fixture: ComponentFixture<R378Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R378Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
