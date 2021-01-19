import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R387Component } from './r387.component';

describe('R387Component', () => {
  let component: R387Component;
  let fixture: ComponentFixture<R387Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R387Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
