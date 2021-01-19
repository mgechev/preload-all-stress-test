import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R367Component } from './r367.component';

describe('R367Component', () => {
  let component: R367Component;
  let fixture: ComponentFixture<R367Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R367Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
