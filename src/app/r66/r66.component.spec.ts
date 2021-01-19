import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R66Component } from './r66.component';

describe('R66Component', () => {
  let component: R66Component;
  let fixture: ComponentFixture<R66Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R66Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
