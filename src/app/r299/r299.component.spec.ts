import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R299Component } from './r299.component';

describe('R299Component', () => {
  let component: R299Component;
  let fixture: ComponentFixture<R299Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R299Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
