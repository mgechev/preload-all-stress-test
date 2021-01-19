import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R200Component } from './r200.component';

describe('R200Component', () => {
  let component: R200Component;
  let fixture: ComponentFixture<R200Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R200Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
