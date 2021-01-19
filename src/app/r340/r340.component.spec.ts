import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R340Component } from './r340.component';

describe('R340Component', () => {
  let component: R340Component;
  let fixture: ComponentFixture<R340Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R340Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
