import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R369Component } from './r369.component';

describe('R369Component', () => {
  let component: R369Component;
  let fixture: ComponentFixture<R369Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R369Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
