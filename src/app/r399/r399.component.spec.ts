import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R399Component } from './r399.component';

describe('R399Component', () => {
  let component: R399Component;
  let fixture: ComponentFixture<R399Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R399Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
