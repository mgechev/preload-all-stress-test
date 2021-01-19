import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R60Component } from './r60.component';

describe('R60Component', () => {
  let component: R60Component;
  let fixture: ComponentFixture<R60Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R60Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
