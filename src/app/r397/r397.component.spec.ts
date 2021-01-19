import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R397Component } from './r397.component';

describe('R397Component', () => {
  let component: R397Component;
  let fixture: ComponentFixture<R397Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R397Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
