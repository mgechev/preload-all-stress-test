import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R241Component } from './r241.component';

describe('R241Component', () => {
  let component: R241Component;
  let fixture: ComponentFixture<R241Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R241Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R241Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
