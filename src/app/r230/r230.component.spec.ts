import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R230Component } from './r230.component';

describe('R230Component', () => {
  let component: R230Component;
  let fixture: ComponentFixture<R230Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R230Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
