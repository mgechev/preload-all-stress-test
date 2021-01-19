import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R169Component } from './r169.component';

describe('R169Component', () => {
  let component: R169Component;
  let fixture: ComponentFixture<R169Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R169Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
