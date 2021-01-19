import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R434Component } from './r434.component';

describe('R434Component', () => {
  let component: R434Component;
  let fixture: ComponentFixture<R434Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R434Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R434Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
