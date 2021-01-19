import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R103Component } from './r103.component';

describe('R103Component', () => {
  let component: R103Component;
  let fixture: ComponentFixture<R103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R103Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
