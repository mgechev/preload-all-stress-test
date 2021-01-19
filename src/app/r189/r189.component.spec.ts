import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R189Component } from './r189.component';

describe('R189Component', () => {
  let component: R189Component;
  let fixture: ComponentFixture<R189Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R189Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R189Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
