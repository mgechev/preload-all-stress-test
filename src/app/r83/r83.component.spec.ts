import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R83Component } from './r83.component';

describe('R83Component', () => {
  let component: R83Component;
  let fixture: ComponentFixture<R83Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R83Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
