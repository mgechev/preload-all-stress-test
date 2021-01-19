import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R233Component } from './r233.component';

describe('R233Component', () => {
  let component: R233Component;
  let fixture: ComponentFixture<R233Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R233Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
