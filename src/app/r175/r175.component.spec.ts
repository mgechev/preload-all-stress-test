import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R175Component } from './r175.component';

describe('R175Component', () => {
  let component: R175Component;
  let fixture: ComponentFixture<R175Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R175Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R175Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
