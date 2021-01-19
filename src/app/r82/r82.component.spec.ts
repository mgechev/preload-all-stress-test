import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R82Component } from './r82.component';

describe('R82Component', () => {
  let component: R82Component;
  let fixture: ComponentFixture<R82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R82Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
