import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R18Component } from './r18.component';

describe('R18Component', () => {
  let component: R18Component;
  let fixture: ComponentFixture<R18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
