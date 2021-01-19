import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R410Component } from './r410.component';

describe('R410Component', () => {
  let component: R410Component;
  let fixture: ComponentFixture<R410Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R410Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
