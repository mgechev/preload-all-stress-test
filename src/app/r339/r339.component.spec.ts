import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R339Component } from './r339.component';

describe('R339Component', () => {
  let component: R339Component;
  let fixture: ComponentFixture<R339Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R339Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
