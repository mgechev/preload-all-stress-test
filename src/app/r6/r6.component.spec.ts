import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R6Component } from './r6.component';

describe('R6Component', () => {
  let component: R6Component;
  let fixture: ComponentFixture<R6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
