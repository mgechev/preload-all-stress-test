import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R101Component } from './r101.component';

describe('R101Component', () => {
  let component: R101Component;
  let fixture: ComponentFixture<R101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
