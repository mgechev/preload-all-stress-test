import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R370Component } from './r370.component';

describe('R370Component', () => {
  let component: R370Component;
  let fixture: ComponentFixture<R370Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R370Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
