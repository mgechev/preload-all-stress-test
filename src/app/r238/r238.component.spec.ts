import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R238Component } from './r238.component';

describe('R238Component', () => {
  let component: R238Component;
  let fixture: ComponentFixture<R238Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R238Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
