import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R374Component } from './r374.component';

describe('R374Component', () => {
  let component: R374Component;
  let fixture: ComponentFixture<R374Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R374Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
