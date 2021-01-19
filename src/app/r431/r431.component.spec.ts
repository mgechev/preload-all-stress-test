import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R431Component } from './r431.component';

describe('R431Component', () => {
  let component: R431Component;
  let fixture: ComponentFixture<R431Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R431Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
