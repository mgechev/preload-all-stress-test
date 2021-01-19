import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R408Component } from './r408.component';

describe('R408Component', () => {
  let component: R408Component;
  let fixture: ComponentFixture<R408Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R408Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
