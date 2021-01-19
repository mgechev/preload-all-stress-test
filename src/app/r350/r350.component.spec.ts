import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R350Component } from './r350.component';

describe('R350Component', () => {
  let component: R350Component;
  let fixture: ComponentFixture<R350Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R350Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
