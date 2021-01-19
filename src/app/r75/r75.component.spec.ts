import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R75Component } from './r75.component';

describe('R75Component', () => {
  let component: R75Component;
  let fixture: ComponentFixture<R75Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R75Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
