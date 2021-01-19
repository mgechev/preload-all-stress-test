import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R61Component } from './r61.component';

describe('R61Component', () => {
  let component: R61Component;
  let fixture: ComponentFixture<R61Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R61Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
