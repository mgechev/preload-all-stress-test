import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R41Component } from './r41.component';

describe('R41Component', () => {
  let component: R41Component;
  let fixture: ComponentFixture<R41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R41Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
