import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R362Component } from './r362.component';

describe('R362Component', () => {
  let component: R362Component;
  let fixture: ComponentFixture<R362Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R362Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
