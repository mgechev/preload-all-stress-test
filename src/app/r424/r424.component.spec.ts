import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R424Component } from './r424.component';

describe('R424Component', () => {
  let component: R424Component;
  let fixture: ComponentFixture<R424Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R424Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
