import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R76Component } from './r76.component';

describe('R76Component', () => {
  let component: R76Component;
  let fixture: ComponentFixture<R76Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R76Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
