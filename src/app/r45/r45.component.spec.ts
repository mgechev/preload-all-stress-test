import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R45Component } from './r45.component';

describe('R45Component', () => {
  let component: R45Component;
  let fixture: ComponentFixture<R45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R45Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
