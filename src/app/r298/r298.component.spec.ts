import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R298Component } from './r298.component';

describe('R298Component', () => {
  let component: R298Component;
  let fixture: ComponentFixture<R298Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R298Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
