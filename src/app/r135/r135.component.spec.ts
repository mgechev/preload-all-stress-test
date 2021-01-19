import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R135Component } from './r135.component';

describe('R135Component', () => {
  let component: R135Component;
  let fixture: ComponentFixture<R135Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R135Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
