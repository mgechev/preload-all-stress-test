import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R112Component } from './r112.component';

describe('R112Component', () => {
  let component: R112Component;
  let fixture: ComponentFixture<R112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R112Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
