import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R472Component } from './r472.component';

describe('R472Component', () => {
  let component: R472Component;
  let fixture: ComponentFixture<R472Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R472Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R472Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
