import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R416Component } from './r416.component';

describe('R416Component', () => {
  let component: R416Component;
  let fixture: ComponentFixture<R416Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R416Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R416Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
