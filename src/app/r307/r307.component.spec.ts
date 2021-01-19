import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R307Component } from './r307.component';

describe('R307Component', () => {
  let component: R307Component;
  let fixture: ComponentFixture<R307Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R307Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
