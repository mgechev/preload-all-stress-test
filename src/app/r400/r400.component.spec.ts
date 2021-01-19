import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R400Component } from './r400.component';

describe('R400Component', () => {
  let component: R400Component;
  let fixture: ComponentFixture<R400Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R400Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
