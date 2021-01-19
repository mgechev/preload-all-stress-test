import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R469Component } from './r469.component';

describe('R469Component', () => {
  let component: R469Component;
  let fixture: ComponentFixture<R469Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R469Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
