import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R28Component } from './r28.component';

describe('R28Component', () => {
  let component: R28Component;
  let fixture: ComponentFixture<R28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
