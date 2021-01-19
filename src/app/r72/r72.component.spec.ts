import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R72Component } from './r72.component';

describe('R72Component', () => {
  let component: R72Component;
  let fixture: ComponentFixture<R72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R72Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
