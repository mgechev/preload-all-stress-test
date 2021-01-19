import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R217Component } from './r217.component';

describe('R217Component', () => {
  let component: R217Component;
  let fixture: ComponentFixture<R217Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R217Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
