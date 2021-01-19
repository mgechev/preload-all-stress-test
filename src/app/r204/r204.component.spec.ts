import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R204Component } from './r204.component';

describe('R204Component', () => {
  let component: R204Component;
  let fixture: ComponentFixture<R204Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R204Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
