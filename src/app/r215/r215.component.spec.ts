import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R215Component } from './r215.component';

describe('R215Component', () => {
  let component: R215Component;
  let fixture: ComponentFixture<R215Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R215Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
