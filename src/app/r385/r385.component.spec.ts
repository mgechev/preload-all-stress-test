import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R385Component } from './r385.component';

describe('R385Component', () => {
  let component: R385Component;
  let fixture: ComponentFixture<R385Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R385Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
