import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R9Component } from './r9.component';

describe('R9Component', () => {
  let component: R9Component;
  let fixture: ComponentFixture<R9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
