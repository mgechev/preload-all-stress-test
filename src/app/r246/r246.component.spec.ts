import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R246Component } from './r246.component';

describe('R246Component', () => {
  let component: R246Component;
  let fixture: ComponentFixture<R246Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R246Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
