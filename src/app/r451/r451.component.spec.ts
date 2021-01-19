import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R451Component } from './r451.component';

describe('R451Component', () => {
  let component: R451Component;
  let fixture: ComponentFixture<R451Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R451Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
