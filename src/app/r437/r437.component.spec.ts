import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R437Component } from './r437.component';

describe('R437Component', () => {
  let component: R437Component;
  let fixture: ComponentFixture<R437Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R437Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
