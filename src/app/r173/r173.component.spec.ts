import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R173Component } from './r173.component';

describe('R173Component', () => {
  let component: R173Component;
  let fixture: ComponentFixture<R173Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R173Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
