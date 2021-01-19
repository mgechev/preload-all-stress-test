import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R176Component } from './r176.component';

describe('R176Component', () => {
  let component: R176Component;
  let fixture: ComponentFixture<R176Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R176Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
