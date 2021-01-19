import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R277Component } from './r277.component';

describe('R277Component', () => {
  let component: R277Component;
  let fixture: ComponentFixture<R277Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R277Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R277Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
