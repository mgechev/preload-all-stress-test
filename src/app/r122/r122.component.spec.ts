import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R122Component } from './r122.component';

describe('R122Component', () => {
  let component: R122Component;
  let fixture: ComponentFixture<R122Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R122Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R122Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
