import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R261Component } from './r261.component';

describe('R261Component', () => {
  let component: R261Component;
  let fixture: ComponentFixture<R261Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R261Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R261Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
