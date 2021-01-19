import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R295Component } from './r295.component';

describe('R295Component', () => {
  let component: R295Component;
  let fixture: ComponentFixture<R295Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R295Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R295Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
