import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R445Component } from './r445.component';

describe('R445Component', () => {
  let component: R445Component;
  let fixture: ComponentFixture<R445Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R445Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
