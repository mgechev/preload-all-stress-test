import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R481Component } from './r481.component';

describe('R481Component', () => {
  let component: R481Component;
  let fixture: ComponentFixture<R481Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R481Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
