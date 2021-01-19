import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R404Component } from './r404.component';

describe('R404Component', () => {
  let component: R404Component;
  let fixture: ComponentFixture<R404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
