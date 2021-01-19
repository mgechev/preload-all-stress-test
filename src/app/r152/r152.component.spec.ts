import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R152Component } from './r152.component';

describe('R152Component', () => {
  let component: R152Component;
  let fixture: ComponentFixture<R152Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R152Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
