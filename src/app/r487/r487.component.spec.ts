import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R487Component } from './r487.component';

describe('R487Component', () => {
  let component: R487Component;
  let fixture: ComponentFixture<R487Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R487Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
