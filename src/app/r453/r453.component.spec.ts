import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R453Component } from './r453.component';

describe('R453Component', () => {
  let component: R453Component;
  let fixture: ComponentFixture<R453Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R453Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
