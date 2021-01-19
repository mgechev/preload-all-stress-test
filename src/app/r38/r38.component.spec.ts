import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R38Component } from './r38.component';

describe('R38Component', () => {
  let component: R38Component;
  let fixture: ComponentFixture<R38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R38Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
