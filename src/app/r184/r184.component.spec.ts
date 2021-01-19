import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R184Component } from './r184.component';

describe('R184Component', () => {
  let component: R184Component;
  let fixture: ComponentFixture<R184Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R184Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
