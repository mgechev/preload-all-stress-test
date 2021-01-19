import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R179Component } from './r179.component';

describe('R179Component', () => {
  let component: R179Component;
  let fixture: ComponentFixture<R179Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R179Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R179Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
