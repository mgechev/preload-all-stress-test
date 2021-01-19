import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R318Component } from './r318.component';

describe('R318Component', () => {
  let component: R318Component;
  let fixture: ComponentFixture<R318Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R318Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
