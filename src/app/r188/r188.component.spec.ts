import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R188Component } from './r188.component';

describe('R188Component', () => {
  let component: R188Component;
  let fixture: ComponentFixture<R188Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R188Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
