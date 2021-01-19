import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R325Component } from './r325.component';

describe('R325Component', () => {
  let component: R325Component;
  let fixture: ComponentFixture<R325Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R325Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
