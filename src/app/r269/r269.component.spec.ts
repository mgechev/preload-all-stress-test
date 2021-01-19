import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R269Component } from './r269.component';

describe('R269Component', () => {
  let component: R269Component;
  let fixture: ComponentFixture<R269Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R269Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R269Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
