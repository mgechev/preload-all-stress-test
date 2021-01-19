import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R36Component } from './r36.component';

describe('R36Component', () => {
  let component: R36Component;
  let fixture: ComponentFixture<R36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R36Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
