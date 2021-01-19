import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R457Component } from './r457.component';

describe('R457Component', () => {
  let component: R457Component;
  let fixture: ComponentFixture<R457Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R457Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R457Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
