import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R454Component } from './r454.component';

describe('R454Component', () => {
  let component: R454Component;
  let fixture: ComponentFixture<R454Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R454Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
