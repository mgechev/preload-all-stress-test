import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R150Component } from './r150.component';

describe('R150Component', () => {
  let component: R150Component;
  let fixture: ComponentFixture<R150Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R150Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
