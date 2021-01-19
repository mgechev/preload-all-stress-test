import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R384Component } from './r384.component';

describe('R384Component', () => {
  let component: R384Component;
  let fixture: ComponentFixture<R384Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R384Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
