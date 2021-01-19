import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R282Component } from './r282.component';

describe('R282Component', () => {
  let component: R282Component;
  let fixture: ComponentFixture<R282Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R282Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
