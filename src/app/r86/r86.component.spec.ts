import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R86Component } from './r86.component';

describe('R86Component', () => {
  let component: R86Component;
  let fixture: ComponentFixture<R86Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R86Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
