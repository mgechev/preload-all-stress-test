import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R117Component } from './r117.component';

describe('R117Component', () => {
  let component: R117Component;
  let fixture: ComponentFixture<R117Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R117Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
