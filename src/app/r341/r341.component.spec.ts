import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R341Component } from './r341.component';

describe('R341Component', () => {
  let component: R341Component;
  let fixture: ComponentFixture<R341Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R341Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
