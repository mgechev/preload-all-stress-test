import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R10Component } from './r10.component';

describe('R10Component', () => {
  let component: R10Component;
  let fixture: ComponentFixture<R10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
