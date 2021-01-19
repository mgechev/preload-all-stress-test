import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R178Component } from './r178.component';

describe('R178Component', () => {
  let component: R178Component;
  let fixture: ComponentFixture<R178Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R178Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R178Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
