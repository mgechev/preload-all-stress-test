import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R255Component } from './r255.component';

describe('R255Component', () => {
  let component: R255Component;
  let fixture: ComponentFixture<R255Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R255Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
