import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R237Component } from './r237.component';

describe('R237Component', () => {
  let component: R237Component;
  let fixture: ComponentFixture<R237Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R237Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R237Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
