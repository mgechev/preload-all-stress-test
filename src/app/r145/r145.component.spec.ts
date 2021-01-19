import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R145Component } from './r145.component';

describe('R145Component', () => {
  let component: R145Component;
  let fixture: ComponentFixture<R145Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R145Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
