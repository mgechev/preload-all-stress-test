import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R459Component } from './r459.component';

describe('R459Component', () => {
  let component: R459Component;
  let fixture: ComponentFixture<R459Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R459Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
