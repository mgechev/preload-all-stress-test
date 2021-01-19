import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R229Component } from './r229.component';

describe('R229Component', () => {
  let component: R229Component;
  let fixture: ComponentFixture<R229Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R229Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
