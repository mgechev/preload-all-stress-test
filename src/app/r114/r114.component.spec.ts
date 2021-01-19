import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R114Component } from './r114.component';

describe('R114Component', () => {
  let component: R114Component;
  let fixture: ComponentFixture<R114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
