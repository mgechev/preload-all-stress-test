import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R62Component } from './r62.component';

describe('R62Component', () => {
  let component: R62Component;
  let fixture: ComponentFixture<R62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R62Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
