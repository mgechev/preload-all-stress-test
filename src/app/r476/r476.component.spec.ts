import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R476Component } from './r476.component';

describe('R476Component', () => {
  let component: R476Component;
  let fixture: ComponentFixture<R476Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R476Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
