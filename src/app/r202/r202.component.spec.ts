import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R202Component } from './r202.component';

describe('R202Component', () => {
  let component: R202Component;
  let fixture: ComponentFixture<R202Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R202Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
