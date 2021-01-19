import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R139Component } from './r139.component';

describe('R139Component', () => {
  let component: R139Component;
  let fixture: ComponentFixture<R139Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R139Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
