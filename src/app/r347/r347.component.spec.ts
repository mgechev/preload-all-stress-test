import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R347Component } from './r347.component';

describe('R347Component', () => {
  let component: R347Component;
  let fixture: ComponentFixture<R347Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R347Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
