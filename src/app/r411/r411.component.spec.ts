import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R411Component } from './r411.component';

describe('R411Component', () => {
  let component: R411Component;
  let fixture: ComponentFixture<R411Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R411Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
