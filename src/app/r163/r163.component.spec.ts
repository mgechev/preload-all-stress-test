import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R163Component } from './r163.component';

describe('R163Component', () => {
  let component: R163Component;
  let fixture: ComponentFixture<R163Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R163Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
