import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R156Component } from './r156.component';

describe('R156Component', () => {
  let component: R156Component;
  let fixture: ComponentFixture<R156Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R156Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
