import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R11Component } from './r11.component';

describe('R11Component', () => {
  let component: R11Component;
  let fixture: ComponentFixture<R11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
