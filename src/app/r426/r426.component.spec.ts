import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R426Component } from './r426.component';

describe('R426Component', () => {
  let component: R426Component;
  let fixture: ComponentFixture<R426Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R426Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
