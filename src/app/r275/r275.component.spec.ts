import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R275Component } from './r275.component';

describe('R275Component', () => {
  let component: R275Component;
  let fixture: ComponentFixture<R275Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R275Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
