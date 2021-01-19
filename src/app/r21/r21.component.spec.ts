import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R21Component } from './r21.component';

describe('R21Component', () => {
  let component: R21Component;
  let fixture: ComponentFixture<R21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
