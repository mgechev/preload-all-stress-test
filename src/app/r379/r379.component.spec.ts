import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R379Component } from './r379.component';

describe('R379Component', () => {
  let component: R379Component;
  let fixture: ComponentFixture<R379Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R379Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
