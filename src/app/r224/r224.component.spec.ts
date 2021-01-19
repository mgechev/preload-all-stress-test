import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R224Component } from './r224.component';

describe('R224Component', () => {
  let component: R224Component;
  let fixture: ComponentFixture<R224Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R224Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
