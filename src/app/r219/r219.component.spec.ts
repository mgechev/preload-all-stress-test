import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R219Component } from './r219.component';

describe('R219Component', () => {
  let component: R219Component;
  let fixture: ComponentFixture<R219Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R219Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
