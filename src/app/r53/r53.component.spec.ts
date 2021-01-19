import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R53Component } from './r53.component';

describe('R53Component', () => {
  let component: R53Component;
  let fixture: ComponentFixture<R53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R53Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
