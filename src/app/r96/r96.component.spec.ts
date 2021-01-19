import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R96Component } from './r96.component';

describe('R96Component', () => {
  let component: R96Component;
  let fixture: ComponentFixture<R96Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R96Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
