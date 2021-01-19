import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R290Component } from './r290.component';

describe('R290Component', () => {
  let component: R290Component;
  let fixture: ComponentFixture<R290Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R290Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
