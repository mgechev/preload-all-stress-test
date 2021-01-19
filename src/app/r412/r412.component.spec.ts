import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R412Component } from './r412.component';

describe('R412Component', () => {
  let component: R412Component;
  let fixture: ComponentFixture<R412Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R412Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
