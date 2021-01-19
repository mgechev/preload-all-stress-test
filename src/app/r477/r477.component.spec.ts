import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R477Component } from './r477.component';

describe('R477Component', () => {
  let component: R477Component;
  let fixture: ComponentFixture<R477Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R477Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
