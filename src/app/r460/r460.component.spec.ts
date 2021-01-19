import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R460Component } from './r460.component';

describe('R460Component', () => {
  let component: R460Component;
  let fixture: ComponentFixture<R460Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R460Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
