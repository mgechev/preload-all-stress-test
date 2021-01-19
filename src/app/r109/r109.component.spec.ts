import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R109Component } from './r109.component';

describe('R109Component', () => {
  let component: R109Component;
  let fixture: ComponentFixture<R109Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R109Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R109Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
