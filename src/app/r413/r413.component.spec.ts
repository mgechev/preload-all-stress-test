import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R413Component } from './r413.component';

describe('R413Component', () => {
  let component: R413Component;
  let fixture: ComponentFixture<R413Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R413Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
