import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R37Component } from './r37.component';

describe('R37Component', () => {
  let component: R37Component;
  let fixture: ComponentFixture<R37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R37Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
