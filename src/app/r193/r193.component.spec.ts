import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R193Component } from './r193.component';

describe('R193Component', () => {
  let component: R193Component;
  let fixture: ComponentFixture<R193Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R193Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
