import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R391Component } from './r391.component';

describe('R391Component', () => {
  let component: R391Component;
  let fixture: ComponentFixture<R391Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R391Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
