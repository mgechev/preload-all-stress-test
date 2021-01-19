import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R197Component } from './r197.component';

describe('R197Component', () => {
  let component: R197Component;
  let fixture: ComponentFixture<R197Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R197Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
