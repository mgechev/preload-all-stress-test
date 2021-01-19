import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R417Component } from './r417.component';

describe('R417Component', () => {
  let component: R417Component;
  let fixture: ComponentFixture<R417Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R417Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
