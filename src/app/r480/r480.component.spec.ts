import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R480Component } from './r480.component';

describe('R480Component', () => {
  let component: R480Component;
  let fixture: ComponentFixture<R480Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R480Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
