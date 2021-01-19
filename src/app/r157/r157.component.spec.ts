import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R157Component } from './r157.component';

describe('R157Component', () => {
  let component: R157Component;
  let fixture: ComponentFixture<R157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R157Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
