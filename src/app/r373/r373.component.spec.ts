import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R373Component } from './r373.component';

describe('R373Component', () => {
  let component: R373Component;
  let fixture: ComponentFixture<R373Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R373Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
