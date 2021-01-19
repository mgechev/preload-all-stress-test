import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R386Component } from './r386.component';

describe('R386Component', () => {
  let component: R386Component;
  let fixture: ComponentFixture<R386Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R386Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R386Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
