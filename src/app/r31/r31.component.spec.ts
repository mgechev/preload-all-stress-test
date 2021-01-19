import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R31Component } from './r31.component';

describe('R31Component', () => {
  let component: R31Component;
  let fixture: ComponentFixture<R31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
