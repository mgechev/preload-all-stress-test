import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R93Component } from './r93.component';

describe('R93Component', () => {
  let component: R93Component;
  let fixture: ComponentFixture<R93Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R93Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
