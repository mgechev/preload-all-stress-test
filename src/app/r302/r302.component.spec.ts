import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R302Component } from './r302.component';

describe('R302Component', () => {
  let component: R302Component;
  let fixture: ComponentFixture<R302Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R302Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R302Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
