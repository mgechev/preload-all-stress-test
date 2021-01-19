import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R444Component } from './r444.component';

describe('R444Component', () => {
  let component: R444Component;
  let fixture: ComponentFixture<R444Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R444Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
