import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R446Component } from './r446.component';

describe('R446Component', () => {
  let component: R446Component;
  let fixture: ComponentFixture<R446Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R446Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R446Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
