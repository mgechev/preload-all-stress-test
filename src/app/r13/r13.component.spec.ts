import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R13Component } from './r13.component';

describe('R13Component', () => {
  let component: R13Component;
  let fixture: ComponentFixture<R13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
