import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R94Component } from './r94.component';

describe('R94Component', () => {
  let component: R94Component;
  let fixture: ComponentFixture<R94Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R94Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
