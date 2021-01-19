import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R320Component } from './r320.component';

describe('R320Component', () => {
  let component: R320Component;
  let fixture: ComponentFixture<R320Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R320Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
