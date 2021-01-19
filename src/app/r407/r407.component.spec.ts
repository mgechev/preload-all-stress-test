import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R407Component } from './r407.component';

describe('R407Component', () => {
  let component: R407Component;
  let fixture: ComponentFixture<R407Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R407Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
