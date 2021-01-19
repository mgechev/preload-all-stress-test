import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R497Component } from './r497.component';

describe('R497Component', () => {
  let component: R497Component;
  let fixture: ComponentFixture<R497Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R497Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R497Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
