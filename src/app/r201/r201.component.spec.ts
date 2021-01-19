import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R201Component } from './r201.component';

describe('R201Component', () => {
  let component: R201Component;
  let fixture: ComponentFixture<R201Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R201Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
