import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R8Component } from './r8.component';

describe('R8Component', () => {
  let component: R8Component;
  let fixture: ComponentFixture<R8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
