import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R321Component } from './r321.component';

describe('R321Component', () => {
  let component: R321Component;
  let fixture: ComponentFixture<R321Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R321Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
