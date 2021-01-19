import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R473Component } from './r473.component';

describe('R473Component', () => {
  let component: R473Component;
  let fixture: ComponentFixture<R473Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R473Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
