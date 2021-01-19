import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R456Component } from './r456.component';

describe('R456Component', () => {
  let component: R456Component;
  let fixture: ComponentFixture<R456Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R456Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
