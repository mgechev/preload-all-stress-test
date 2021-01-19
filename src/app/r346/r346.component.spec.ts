import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R346Component } from './r346.component';

describe('R346Component', () => {
  let component: R346Component;
  let fixture: ComponentFixture<R346Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R346Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R346Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
