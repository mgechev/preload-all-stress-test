import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R69Component } from './r69.component';

describe('R69Component', () => {
  let component: R69Component;
  let fixture: ComponentFixture<R69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R69Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
