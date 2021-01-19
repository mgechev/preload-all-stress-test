import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R58Component } from './r58.component';

describe('R58Component', () => {
  let component: R58Component;
  let fixture: ComponentFixture<R58Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R58Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
