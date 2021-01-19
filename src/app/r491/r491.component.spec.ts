import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R491Component } from './r491.component';

describe('R491Component', () => {
  let component: R491Component;
  let fixture: ComponentFixture<R491Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R491Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
