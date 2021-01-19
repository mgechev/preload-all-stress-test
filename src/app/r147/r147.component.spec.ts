import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R147Component } from './r147.component';

describe('R147Component', () => {
  let component: R147Component;
  let fixture: ComponentFixture<R147Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R147Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
