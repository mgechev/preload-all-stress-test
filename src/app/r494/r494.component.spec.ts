import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R494Component } from './r494.component';

describe('R494Component', () => {
  let component: R494Component;
  let fixture: ComponentFixture<R494Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R494Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
