import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R260Component } from './r260.component';

describe('R260Component', () => {
  let component: R260Component;
  let fixture: ComponentFixture<R260Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R260Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
