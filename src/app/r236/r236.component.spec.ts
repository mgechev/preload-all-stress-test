import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R236Component } from './r236.component';

describe('R236Component', () => {
  let component: R236Component;
  let fixture: ComponentFixture<R236Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R236Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R236Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
