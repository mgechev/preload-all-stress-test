import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R463Component } from './r463.component';

describe('R463Component', () => {
  let component: R463Component;
  let fixture: ComponentFixture<R463Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R463Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
