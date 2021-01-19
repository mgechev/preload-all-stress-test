import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R356Component } from './r356.component';

describe('R356Component', () => {
  let component: R356Component;
  let fixture: ComponentFixture<R356Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R356Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
