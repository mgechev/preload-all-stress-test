import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R429Component } from './r429.component';

describe('R429Component', () => {
  let component: R429Component;
  let fixture: ComponentFixture<R429Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R429Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
