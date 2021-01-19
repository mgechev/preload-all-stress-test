import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R205Component } from './r205.component';

describe('R205Component', () => {
  let component: R205Component;
  let fixture: ComponentFixture<R205Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R205Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R205Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
