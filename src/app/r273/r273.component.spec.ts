import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R273Component } from './r273.component';

describe('R273Component', () => {
  let component: R273Component;
  let fixture: ComponentFixture<R273Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R273Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
