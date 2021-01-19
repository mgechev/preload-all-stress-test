import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R281Component } from './r281.component';

describe('R281Component', () => {
  let component: R281Component;
  let fixture: ComponentFixture<R281Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R281Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
