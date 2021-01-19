import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R274Component } from './r274.component';

describe('R274Component', () => {
  let component: R274Component;
  let fixture: ComponentFixture<R274Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R274Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
