import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R268Component } from './r268.component';

describe('R268Component', () => {
  let component: R268Component;
  let fixture: ComponentFixture<R268Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R268Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R268Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
