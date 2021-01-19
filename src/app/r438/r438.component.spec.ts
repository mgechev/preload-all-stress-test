import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R438Component } from './r438.component';

describe('R438Component', () => {
  let component: R438Component;
  let fixture: ComponentFixture<R438Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R438Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
