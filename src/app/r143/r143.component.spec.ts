import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R143Component } from './r143.component';

describe('R143Component', () => {
  let component: R143Component;
  let fixture: ComponentFixture<R143Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R143Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
