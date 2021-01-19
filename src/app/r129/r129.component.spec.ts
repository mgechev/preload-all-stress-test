import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R129Component } from './r129.component';

describe('R129Component', () => {
  let component: R129Component;
  let fixture: ComponentFixture<R129Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R129Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
