import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R56Component } from './r56.component';

describe('R56Component', () => {
  let component: R56Component;
  let fixture: ComponentFixture<R56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R56Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
