import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R12Component } from './r12.component';

describe('R12Component', () => {
  let component: R12Component;
  let fixture: ComponentFixture<R12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
