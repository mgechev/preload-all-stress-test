import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R65Component } from './r65.component';

describe('R65Component', () => {
  let component: R65Component;
  let fixture: ComponentFixture<R65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R65Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
