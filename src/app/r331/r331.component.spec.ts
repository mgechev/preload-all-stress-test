import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R331Component } from './r331.component';

describe('R331Component', () => {
  let component: R331Component;
  let fixture: ComponentFixture<R331Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R331Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
