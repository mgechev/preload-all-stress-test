import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R440Component } from './r440.component';

describe('R440Component', () => {
  let component: R440Component;
  let fixture: ComponentFixture<R440Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R440Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
