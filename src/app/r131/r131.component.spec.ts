import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R131Component } from './r131.component';

describe('R131Component', () => {
  let component: R131Component;
  let fixture: ComponentFixture<R131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R131Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
