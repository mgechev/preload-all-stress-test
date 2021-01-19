import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R132Component } from './r132.component';

describe('R132Component', () => {
  let component: R132Component;
  let fixture: ComponentFixture<R132Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R132Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
