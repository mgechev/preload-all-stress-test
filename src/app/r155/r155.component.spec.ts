import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R155Component } from './r155.component';

describe('R155Component', () => {
  let component: R155Component;
  let fixture: ComponentFixture<R155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R155Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
