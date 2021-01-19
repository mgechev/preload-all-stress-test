import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R15Component } from './r15.component';

describe('R15Component', () => {
  let component: R15Component;
  let fixture: ComponentFixture<R15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
