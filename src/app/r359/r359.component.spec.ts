import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R359Component } from './r359.component';

describe('R359Component', () => {
  let component: R359Component;
  let fixture: ComponentFixture<R359Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R359Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
