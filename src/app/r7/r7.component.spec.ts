import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R7Component } from './r7.component';

describe('R7Component', () => {
  let component: R7Component;
  let fixture: ComponentFixture<R7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
