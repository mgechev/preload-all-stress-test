import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R146Component } from './r146.component';

describe('R146Component', () => {
  let component: R146Component;
  let fixture: ComponentFixture<R146Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R146Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
