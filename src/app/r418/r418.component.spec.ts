import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R418Component } from './r418.component';

describe('R418Component', () => {
  let component: R418Component;
  let fixture: ComponentFixture<R418Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R418Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
