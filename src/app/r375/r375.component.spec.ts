import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R375Component } from './r375.component';

describe('R375Component', () => {
  let component: R375Component;
  let fixture: ComponentFixture<R375Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R375Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
