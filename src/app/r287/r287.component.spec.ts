import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R287Component } from './r287.component';

describe('R287Component', () => {
  let component: R287Component;
  let fixture: ComponentFixture<R287Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R287Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R287Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
