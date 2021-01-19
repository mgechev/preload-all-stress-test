import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R168Component } from './r168.component';

describe('R168Component', () => {
  let component: R168Component;
  let fixture: ComponentFixture<R168Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R168Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
