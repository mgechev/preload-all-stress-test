import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R414Component } from './r414.component';

describe('R414Component', () => {
  let component: R414Component;
  let fixture: ComponentFixture<R414Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R414Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
