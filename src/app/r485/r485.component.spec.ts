import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R485Component } from './r485.component';

describe('R485Component', () => {
  let component: R485Component;
  let fixture: ComponentFixture<R485Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R485Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
