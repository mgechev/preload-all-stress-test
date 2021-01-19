import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R27Component } from './r27.component';

describe('R27Component', () => {
  let component: R27Component;
  let fixture: ComponentFixture<R27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
