import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R243Component } from './r243.component';

describe('R243Component', () => {
  let component: R243Component;
  let fixture: ComponentFixture<R243Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R243Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
