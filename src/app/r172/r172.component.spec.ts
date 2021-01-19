import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R172Component } from './r172.component';

describe('R172Component', () => {
  let component: R172Component;
  let fixture: ComponentFixture<R172Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R172Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
