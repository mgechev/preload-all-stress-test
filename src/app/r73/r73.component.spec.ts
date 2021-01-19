import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R73Component } from './r73.component';

describe('R73Component', () => {
  let component: R73Component;
  let fixture: ComponentFixture<R73Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R73Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
