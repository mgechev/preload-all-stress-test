import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R284Component } from './r284.component';

describe('R284Component', () => {
  let component: R284Component;
  let fixture: ComponentFixture<R284Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R284Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
