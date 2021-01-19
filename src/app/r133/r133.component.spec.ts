import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R133Component } from './r133.component';

describe('R133Component', () => {
  let component: R133Component;
  let fixture: ComponentFixture<R133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R133Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
