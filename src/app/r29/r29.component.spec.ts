import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R29Component } from './r29.component';

describe('R29Component', () => {
  let component: R29Component;
  let fixture: ComponentFixture<R29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R29Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
