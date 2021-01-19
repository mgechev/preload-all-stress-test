import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R198Component } from './r198.component';

describe('R198Component', () => {
  let component: R198Component;
  let fixture: ComponentFixture<R198Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R198Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
