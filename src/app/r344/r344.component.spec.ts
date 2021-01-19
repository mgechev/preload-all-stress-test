import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R344Component } from './r344.component';

describe('R344Component', () => {
  let component: R344Component;
  let fixture: ComponentFixture<R344Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R344Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
