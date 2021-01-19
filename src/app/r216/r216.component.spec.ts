import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R216Component } from './r216.component';

describe('R216Component', () => {
  let component: R216Component;
  let fixture: ComponentFixture<R216Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R216Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
