import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R490Component } from './r490.component';

describe('R490Component', () => {
  let component: R490Component;
  let fixture: ComponentFixture<R490Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R490Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
