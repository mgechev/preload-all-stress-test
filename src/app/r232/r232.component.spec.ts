import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R232Component } from './r232.component';

describe('R232Component', () => {
  let component: R232Component;
  let fixture: ComponentFixture<R232Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R232Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
