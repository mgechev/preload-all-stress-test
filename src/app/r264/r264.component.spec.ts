import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R264Component } from './r264.component';

describe('R264Component', () => {
  let component: R264Component;
  let fixture: ComponentFixture<R264Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R264Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R264Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
