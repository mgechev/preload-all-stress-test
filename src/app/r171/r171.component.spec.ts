import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R171Component } from './r171.component';

describe('R171Component', () => {
  let component: R171Component;
  let fixture: ComponentFixture<R171Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R171Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
