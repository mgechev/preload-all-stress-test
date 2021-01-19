import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R280Component } from './r280.component';

describe('R280Component', () => {
  let component: R280Component;
  let fixture: ComponentFixture<R280Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R280Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
