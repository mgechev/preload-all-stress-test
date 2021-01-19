import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R48Component } from './r48.component';

describe('R48Component', () => {
  let component: R48Component;
  let fixture: ComponentFixture<R48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R48Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
