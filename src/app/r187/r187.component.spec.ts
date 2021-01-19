import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R187Component } from './r187.component';

describe('R187Component', () => {
  let component: R187Component;
  let fixture: ComponentFixture<R187Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R187Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
