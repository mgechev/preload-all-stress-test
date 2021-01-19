import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R315Component } from './r315.component';

describe('R315Component', () => {
  let component: R315Component;
  let fixture: ComponentFixture<R315Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R315Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
