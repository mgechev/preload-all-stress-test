import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R40Component } from './r40.component';

describe('R40Component', () => {
  let component: R40Component;
  let fixture: ComponentFixture<R40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R40Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
