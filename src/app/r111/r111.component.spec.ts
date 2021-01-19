import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R111Component } from './r111.component';

describe('R111Component', () => {
  let component: R111Component;
  let fixture: ComponentFixture<R111Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R111Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
