import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R33Component } from './r33.component';

describe('R33Component', () => {
  let component: R33Component;
  let fixture: ComponentFixture<R33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R33Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
