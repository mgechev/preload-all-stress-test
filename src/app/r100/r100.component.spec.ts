import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R100Component } from './r100.component';

describe('R100Component', () => {
  let component: R100Component;
  let fixture: ComponentFixture<R100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
