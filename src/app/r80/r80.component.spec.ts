import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R80Component } from './r80.component';

describe('R80Component', () => {
  let component: R80Component;
  let fixture: ComponentFixture<R80Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R80Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
