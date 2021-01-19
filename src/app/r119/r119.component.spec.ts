import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R119Component } from './r119.component';

describe('R119Component', () => {
  let component: R119Component;
  let fixture: ComponentFixture<R119Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R119Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
