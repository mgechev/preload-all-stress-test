import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R2Component } from './r2.component';

describe('R2Component', () => {
  let component: R2Component;
  let fixture: ComponentFixture<R2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
