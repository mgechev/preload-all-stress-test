import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R423Component } from './r423.component';

describe('R423Component', () => {
  let component: R423Component;
  let fixture: ComponentFixture<R423Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R423Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
