import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R52Component } from './r52.component';

describe('R52Component', () => {
  let component: R52Component;
  let fixture: ComponentFixture<R52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R52Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
