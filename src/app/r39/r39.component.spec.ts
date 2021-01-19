import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R39Component } from './r39.component';

describe('R39Component', () => {
  let component: R39Component;
  let fixture: ComponentFixture<R39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R39Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
