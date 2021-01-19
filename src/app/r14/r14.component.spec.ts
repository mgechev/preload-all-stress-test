import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R14Component } from './r14.component';

describe('R14Component', () => {
  let component: R14Component;
  let fixture: ComponentFixture<R14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
