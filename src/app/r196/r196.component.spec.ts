import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R196Component } from './r196.component';

describe('R196Component', () => {
  let component: R196Component;
  let fixture: ComponentFixture<R196Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R196Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
