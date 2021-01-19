import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R164Component } from './r164.component';

describe('R164Component', () => {
  let component: R164Component;
  let fixture: ComponentFixture<R164Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R164Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
