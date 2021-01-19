import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R279Component } from './r279.component';

describe('R279Component', () => {
  let component: R279Component;
  let fixture: ComponentFixture<R279Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R279Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
