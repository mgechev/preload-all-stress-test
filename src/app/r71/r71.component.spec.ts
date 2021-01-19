import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R71Component } from './r71.component';

describe('R71Component', () => {
  let component: R71Component;
  let fixture: ComponentFixture<R71Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R71Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
