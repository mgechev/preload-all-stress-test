import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R312Component } from './r312.component';

describe('R312Component', () => {
  let component: R312Component;
  let fixture: ComponentFixture<R312Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R312Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
