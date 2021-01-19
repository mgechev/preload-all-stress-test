import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R151Component } from './r151.component';

describe('R151Component', () => {
  let component: R151Component;
  let fixture: ComponentFixture<R151Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R151Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
