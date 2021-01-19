import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R322Component } from './r322.component';

describe('R322Component', () => {
  let component: R322Component;
  let fixture: ComponentFixture<R322Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R322Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
