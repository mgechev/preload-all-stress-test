import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R462Component } from './r462.component';

describe('R462Component', () => {
  let component: R462Component;
  let fixture: ComponentFixture<R462Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R462Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
