import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R19Component } from './r19.component';

describe('R19Component', () => {
  let component: R19Component;
  let fixture: ComponentFixture<R19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
