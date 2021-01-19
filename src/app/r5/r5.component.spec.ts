import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R5Component } from './r5.component';

describe('R5Component', () => {
  let component: R5Component;
  let fixture: ComponentFixture<R5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
