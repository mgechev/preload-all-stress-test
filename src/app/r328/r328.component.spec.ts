import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R328Component } from './r328.component';

describe('R328Component', () => {
  let component: R328Component;
  let fixture: ComponentFixture<R328Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R328Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
