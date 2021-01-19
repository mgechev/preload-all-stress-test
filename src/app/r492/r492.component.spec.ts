import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R492Component } from './r492.component';

describe('R492Component', () => {
  let component: R492Component;
  let fixture: ComponentFixture<R492Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R492Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
