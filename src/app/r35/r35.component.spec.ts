import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R35Component } from './r35.component';

describe('R35Component', () => {
  let component: R35Component;
  let fixture: ComponentFixture<R35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R35Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
