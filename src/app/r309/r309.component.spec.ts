import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R309Component } from './r309.component';

describe('R309Component', () => {
  let component: R309Component;
  let fixture: ComponentFixture<R309Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R309Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R309Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
