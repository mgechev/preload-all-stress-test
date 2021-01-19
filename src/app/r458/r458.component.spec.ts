import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R458Component } from './r458.component';

describe('R458Component', () => {
  let component: R458Component;
  let fixture: ComponentFixture<R458Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R458Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
