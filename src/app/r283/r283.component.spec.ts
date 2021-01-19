import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R283Component } from './r283.component';

describe('R283Component', () => {
  let component: R283Component;
  let fixture: ComponentFixture<R283Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R283Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
