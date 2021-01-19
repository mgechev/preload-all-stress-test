import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R44Component } from './r44.component';

describe('R44Component', () => {
  let component: R44Component;
  let fixture: ComponentFixture<R44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R44Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
