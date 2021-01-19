import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R382Component } from './r382.component';

describe('R382Component', () => {
  let component: R382Component;
  let fixture: ComponentFixture<R382Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R382Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R382Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
