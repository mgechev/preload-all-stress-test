import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R99Component } from './r99.component';

describe('R99Component', () => {
  let component: R99Component;
  let fixture: ComponentFixture<R99Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R99Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
