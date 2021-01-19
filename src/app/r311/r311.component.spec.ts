import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R311Component } from './r311.component';

describe('R311Component', () => {
  let component: R311Component;
  let fixture: ComponentFixture<R311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R311Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
