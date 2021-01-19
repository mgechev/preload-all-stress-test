import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R329Component } from './r329.component';

describe('R329Component', () => {
  let component: R329Component;
  let fixture: ComponentFixture<R329Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R329Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
