import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R34Component } from './r34.component';

describe('R34Component', () => {
  let component: R34Component;
  let fixture: ComponentFixture<R34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R34Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
