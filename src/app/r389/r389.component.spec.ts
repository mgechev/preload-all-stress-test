import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R389Component } from './r389.component';

describe('R389Component', () => {
  let component: R389Component;
  let fixture: ComponentFixture<R389Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R389Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
