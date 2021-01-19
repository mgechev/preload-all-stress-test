import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R343Component } from './r343.component';

describe('R343Component', () => {
  let component: R343Component;
  let fixture: ComponentFixture<R343Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R343Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
