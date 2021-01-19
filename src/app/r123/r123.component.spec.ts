import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R123Component } from './r123.component';

describe('R123Component', () => {
  let component: R123Component;
  let fixture: ComponentFixture<R123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
