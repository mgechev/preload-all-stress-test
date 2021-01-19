import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R126Component } from './r126.component';

describe('R126Component', () => {
  let component: R126Component;
  let fixture: ComponentFixture<R126Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R126Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R126Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
