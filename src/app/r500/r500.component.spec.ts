import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R500Component } from './r500.component';

describe('R500Component', () => {
  let component: R500Component;
  let fixture: ComponentFixture<R500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
