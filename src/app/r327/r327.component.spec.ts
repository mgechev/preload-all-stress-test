import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R327Component } from './r327.component';

describe('R327Component', () => {
  let component: R327Component;
  let fixture: ComponentFixture<R327Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R327Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
