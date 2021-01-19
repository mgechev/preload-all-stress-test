import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R88Component } from './r88.component';

describe('R88Component', () => {
  let component: R88Component;
  let fixture: ComponentFixture<R88Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R88Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
