import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R294Component } from './r294.component';

describe('R294Component', () => {
  let component: R294Component;
  let fixture: ComponentFixture<R294Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R294Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
