import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R301Component } from './r301.component';

describe('R301Component', () => {
  let component: R301Component;
  let fixture: ComponentFixture<R301Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R301Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
