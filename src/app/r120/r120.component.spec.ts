import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R120Component } from './r120.component';

describe('R120Component', () => {
  let component: R120Component;
  let fixture: ComponentFixture<R120Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R120Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
