import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R293Component } from './r293.component';

describe('R293Component', () => {
  let component: R293Component;
  let fixture: ComponentFixture<R293Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R293Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R293Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
