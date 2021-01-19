import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R81Component } from './r81.component';

describe('R81Component', () => {
  let component: R81Component;
  let fixture: ComponentFixture<R81Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R81Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
