import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R357Component } from './r357.component';

describe('R357Component', () => {
  let component: R357Component;
  let fixture: ComponentFixture<R357Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R357Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
