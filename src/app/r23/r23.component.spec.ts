import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R23Component } from './r23.component';

describe('R23Component', () => {
  let component: R23Component;
  let fixture: ComponentFixture<R23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
