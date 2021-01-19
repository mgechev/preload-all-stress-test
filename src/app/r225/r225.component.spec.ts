import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R225Component } from './r225.component';

describe('R225Component', () => {
  let component: R225Component;
  let fixture: ComponentFixture<R225Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R225Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
